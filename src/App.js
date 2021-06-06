import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import Inicio from "./components/Inicio";
import ListarCategorias from "./components/ListarCategorias";
import EditarCategoria from "./components/EditarCategoria";
import AgregarCategoria from "./components/AgregarCategoria";
import { useState, useEffect } from 'react';

import Subscription from './components/Subscription/Subscription'
import Error404 from "./components/Error404";
import Contact from "./components/Contact/Contact";
import Administracion from "./components/Administracion.js";
import AgregarNoticias from "./components/AgregarNoticias";
import ListarNoticias from "./components/ListarNoticias";
import EditarNoticia from "./components/EditarNoticia";
//import Login from './components/Login/Login';
//import AboutUs from './components/AboutUs/AboutUs'
//import Contact from './components/Contact/Contact'


function App() {
  const [categorias, setCategorias] = useState([]);
  const [noticias, setNoticias] = useState([]);


  useEffect(() => {
    consultarCategorias();
    consultarNoticias();
  }, []);

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
  }

  const consultarNoticias = async () => {
    try {
      const urlNoticias = process.env.REACT_APP_URL_NOTICIAS;
      const resp = await fetch(urlNoticias);
      const data = await resp.json();
      if (respuesta.status === 200) {
        setNoticias(data);
      }
    } catch (error) {
      console.log(error);
    }
  }


return (
  <Router>
    {/* <Navegacion /> */}
    <Switch>
      <Route exact path="/">
        <Inicio />
      </Route>
      <Route exact path="/categorias">
        <ListarCategorias categorias={categorias} consultarCategorias={consultarCategorias} />
      </Route>
      <Route exact path="/categorias/editar/:id">
        <EditarCategoria consultarCategorias={consultarCategorias} />
      </Route>
      <Route exact path="/categorias/nuevo">
        <AgregarCategoria consultarCategorias={consultarCategorias} />
      </Route>
      <Route exact path="/suscripcion">
        <Subscription />
      </Route>
      <Route exact path="/contacto">
        <Contact />
      </Route>
      <Route exact path="/administracion">
        <Administracion />
      </Route>
      <Route exact path="/administracion/noticias" >
        <ListarNoticias noticias={noticias} consultarNoticias={consultarNoticias}/>
      </Route>
      <Route exact path="administracion//noticias/editar/:id">
        <EditarNoticia consultarNoticias={consultarNoticias} />
      </Route>
      <Route exact path="/administracion/noticias/agregar" >
        <AgregarNoticias consultarNoticias={consultarNoticias} />
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
