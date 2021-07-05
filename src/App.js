import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navegacion from "./components/Common/Navegacion";
import Footer from "./components/Common/Footer";
import Inicio from "./components/Inicio/Inicio";
import ListarCategorias from "./components/Categoria/ListarCategorias";
import EditarCategoria from "./components/Categoria/EditarCategoria";
import AgregarCategoria from "./components/Categoria/AgregarCategoria";
import Subscription from "./components/Suscripcion/Subscription";
import Error404 from "./components/Error404";
import Contact from "./components/Contacto/Contact";
import Administracion from "./components/Administracion.js";
import AgregarNoticias from "./components/Noticia/AgregarNoticias";
import ListarNoticias from "./components/Noticia/ListarNoticias";
import EditarNoticia from "./components/Noticia/EditarNoticia";
import AboutUs from "./components/AcercaDe/AboutUs";
import DetalleNoticia from "./components/Noticia/DetalleNoticia";
import CategoriaListadoNoticias from "./components/Categoria/CategoriaListadoNoticias";
import BuscarNoticias from "./components/Noticia/BuscarNoticias";
import Tabs from "./components/Common/Tabs";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [categorias, setCategorias] = useState([]);
  const [cargandoCategorias, setCargandoCategorias] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const [cargandoNoticias, setCargandoNoticias] = useState(false);
  const [dolar, setDolar] = useState({});
  const [euro, setEuro] = useState({});
  const [real, setReal] = useState({});
  const [clima, setClima] = useState({});

  useEffect(() => {
    consultarCategorias();
    consultarNoticias();
    consultarDolar();
    consultarEuro();
    consultarReal();
    ejecutarClima();
  }, []);

  const ejecutarClima = async () => {
    const ciudad = "san miguel de tucuman";
    const getCiudad = ciudad.replace(/ /g, "%20").toLowerCase();
    const URL_Clima = `http://api.openweathermap.org/data/2.5/weather?q=${getCiudad}&appid=70bea3ec52e1948d8099a3d90fe8f150&units=metric`;
    const respuesta = await fetch(URL_Clima);
    const data = await respuesta.json();
    setClima(data);
  };

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
      setCargandoCategorias(true);
      const url = process.env.REACT_APP_URL_CATEGORIA;
      const respuesta = await fetch(url);
      const informacion = await respuesta.json();
      if (respuesta.status === 200) {
        setCargandoCategorias(false);
        setCategorias(informacion);
      }
    } catch (error) {
      setCargandoCategorias(false);
      console.log(error);
    }
  };

  const consultarNoticias = async () => {
    try {
      setCargandoNoticias(true);
      const urln = process.env.REACT_APP_URL_NOTICIA;
      const resp = await fetch(urln);
      const data = await resp.json();
      if (resp.status === 200) {
        setCargandoNoticias(false);
        setNoticias(data);
      }
    } catch (error) {
      setCargandoNoticias(false);
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
          <Inicio noticias={noticias} cargando={cargandoNoticias} />
        </Route>

        <Route exact path="/:nombreCategoria">
          <Tabs/>
        </Route>

        <Route exact path="/categorias">
          <ListarCategorias
            categorias={categorias}
            consultarCategorias={consultarCategorias}
            cargando={cargandoCategorias}
          />
        </Route>

        <Route exact path="/categorias/editar/:id">
          <EditarCategoria consultarCategorias={consultarCategorias} />
        </Route>

        <Route exact path="/noticia/:id">
          <DetalleNoticia noticias={noticias} />
        </Route>

        <Route exact path="/categorias/nuevo">
          <AgregarCategoria consultarCategorias={consultarCategorias} />
        </Route>

        <Route exact path="/categorias/listado-noticias/:nombreCategoria">
          <CategoriaListadoNoticias />
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
            categorias={categorias}
            consultarNoticias={consultarNoticias}
            cargando={cargandoNoticias}
            cargandoCategorias={cargandoCategorias}
          />
        </Route>

        <Route exact path="/noticias/editar/:id">
          <EditarNoticia
            categorias={categorias}
            cargandoCategorias={cargandoCategorias}
            consultarNoticias={consultarNoticias}
          />
        </Route>

        <Route exact path="/noticias/agregar">
          <AgregarNoticias
            categorias={categorias}
            consultarNoticias={consultarNoticias}
          />
        </Route>

        <Route exact path="/buscar/:terminoBusqueda">
          <BuscarNoticias />
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
