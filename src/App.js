import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import Inicio from "./components/Inicio";
import ListarCategorias from "./components/Categoria/ListarCategorias";
import EditarCategoria from "./components/Categoria/EditarCategoria";
import AgregarCategoria from "./components/Categoria/AgregarCategoria";
import Subscription from "./components/Subscription/Subscription";
import Error404 from "./components/Error404";
import Contact from "./components/Contact/Contact";
import Administracion from "./components/Administracion.js";
import AgregarNoticias from "./components/AgregarNoticias";
import ListarNoticias from "./components/ListarNoticias";
import EditarNoticia from "./components/EditarNoticia";
import AboutUs from "./components/AboutUs/AboutUs";
import DetalleNoticia from "./components/DetalleNoticia";
import CategoriaListadoNoticias from "./components/Categoria/CategoriaListadoNoticias";

function App() {
  const [categorias, setCategorias] = useState([]);
  const [dolar, setDolar] = useState({});
  const [euro, setEuro] = useState({});
  const [real, setReal] = useState({});
  const [noticias, setNoticias] = useState([]);
  const [clima, setClima] = useState({})

  useEffect(() => {
    consultarCategorias();
    consultarDolar();
    consultarEuro();
    consultarReal();
    ejecutarClima();
    consultarNoticias();
  }, []);

  const ejecutarClima = async () => {
    const ciudad = 'san miguel de tucuman';
    const getCiudad = ciudad.replace(/ /g, "%20").toLowerCase();
    const URL_Clima = `http://api.openweathermap.org/data/2.5/weather?q=${getCiudad}&appid=70bea3ec52e1948d8099a3d90fe8f150&units=metric`;
    const respuesta = await fetch(URL_Clima);
    const data = await respuesta.json();
    setClima(data);
  }

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
  };

  return (
    <Router>
      <Navegacion
        dolar={dolar}
        euro={euro}
        real={real}
        categorias={categorias}
        clima={clima}
      />
      <Switch>
        <Route exact path="/">
          <Inicio noticias={noticias} />
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
          <DetalleNoticia noticias={noticias} />
        </Route>
        <Route exact path="/categorias/nuevo">
          <AgregarCategoria consultarCategorias={consultarCategorias}/>
        </Route>
        <Route exact path="/categorias/listado-noticias/:nombreCategoria">
          <CategoriaListadoNoticias/>
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
         
          <EditarNoticia  categorias={categorias} consultarNoticias={consultarNoticias} />
        </Route>
        <Route exact path="/noticias/agregar">
          <AgregarNoticias
            categorias={categorias}
            consultarNoticias={consultarNoticias}
          />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
