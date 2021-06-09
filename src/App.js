import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import Inicio from "./components/Inicio";
import ListarCategorias from "./components/ListarCategorias";
import EditarCategoria from "./components/EditarCategoria";
import AgregarCategoria from "./components/AgregarCategoria";
import Subscription from "./components/Subscription/Subscription";
import Error404 from "./components/Error404";
import Contact from "./components/Contact/Contact";
import Administracion from "./components/Administracion.js";
import AgregarNoticias from "./components/AgregarNoticias";
import ListarNoticias from "./components/ListarNoticias";
import EditarNoticia from "./components/EditarNoticia";
//import Login from './components/Login/Login';
import AboutUs from './components/AboutUs/AboutUs'
import DetalleNoticia from "./components/DetalleNoticia";

function App() {
  const [categorias, setCategorias] = useState([]);
  const [dolar, setDolar] = useState({});
  const [euro, setEuro] = useState({});
  const [real, setReal] = useState({});
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    consultarCategorias();
    consultarDolar();
    consultarEuro();
    consultarReal();
    consultarNoticias();
  }, []);

  const consultarDolar = async () => {
    try {
      const url = process.env.REACT_APP_URL_DOLAR;

      const respuesta = await fetch(url);
      const cotizacionDolar = await respuesta.json();

      setDolar(JSON.parse(cotizacionDolar));
    } catch (error) {
      console.log(error);
    }
  };

  const consultarEuro = async () => {
    try {
      const url = process.env.REACT_APP_URL_EURO;

      const respuesta = await fetch(url);
      const cotizacionEuro = await respuesta.json();

      setEuro(JSON.parse(cotizacionEuro));
    } catch (error) {
      console.log(error);
    }
  };

  const consultarReal = async () => {
    try {
      const url = process.env.REACT_APP_URL_REAL;

      const respuesta = await fetch(url);
      const cotizacionReal = await respuesta.json();

      setReal(JSON.parse(cotizacionReal));
    } catch (error) {
      console.log(error);
    }
  };

  const consultarCategorias = async () => {
    try {
      const url = process.env.REACT_APP_URL_CATEGORIA;
      const respuesta = await fetch(url);
      const informacion = await respuesta.json();
      if (respuesta.status === 200) {
        setCategorias(informacion);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const consultarNoticias = async () => {
    try {
      const urln = process.env.REACT_APP_URL_NOTICIA;
      const resp = await fetch(urln);
      const data = await resp.json();
      if (resp.status === 200) {
        setNoticias(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Router>
      <Navegacion
        dolar={dolar}
        euro={euro}
        real={real}
        categorias={categorias}
      />
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/categorias">
          <ListarCategorias
            categorias={categorias}
            consultarCategorias={consultarCategorias}
          />
        </Route>
        <Route exact path="/categorias/editar/:id">
          <EditarCategoria consultarCategorias={consultarCategorias} />
        </Route>
        <Route exact path="/noticia/:id">
          <DetalleNoticia />
        </Route>
        <Route exact path="/categorias/nuevo">
          {/* <AgregarCategoria consultarCategorias={consultarCategorias}/> */}
          <AgregarCategoria consultarCategorias={consultarNoticias} />
        </Route>
        <Route exact path="/suscripcion">
          <Subscription />
        </Route>
        <Route exact path="/contacto">
          <Contact />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route exact path="/administracion">
          <Administracion />
        </Route>
        <Route exact path="/detallenoticia">
          <DetalleNoticia />
        </Route>
        <Route exact path="/noticias">
          <ListarNoticias
            noticias={noticias}
            consultarNoticias={consultarNoticias}
          />
        </Route>
        <Route exact path="/noticias/editar/:id">
          <EditarNoticia consultarNoticias={consultarNoticias} />
        </Route>
        <Route exact path="/noticias/agregar">
          <AgregarNoticias 
          categorias={categorias}
          consultarNoticias={consultarNoticias} />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
