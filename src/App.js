import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import Inicio from "./components/Inicio";
import ListarCategorias from "./components/ListarCategorias";
import EditarCategoria from "./components/EditarCategoria";
import AgregarCategoria from "./components/AgregarCategoria";
import {useState, useEffect} from 'react';


function App() {
  const [categorias, setCategorias] = useState([]);
  
  useEffect(()=>{
    consultarCategorias();
  },[]);

  const  consultarCategorias = async ()=>{
    try {
      const url = process.env.REACT_APP_URL_CATEGORIA;
      const respuesta = await fetch( url);
      const informacion = await respuesta.json();
      if(respuesta.status === 200){
        setCategorias(informacion);
        console.log(informacion)
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
          <ListarCategorias categorias={categorias} consultarCategorias={consultarCategorias}/>
        </Route>
        <Route exact path="/categorias/editar/:id">
          <EditarCategoria consultarCategorias={consultarCategorias}/>
        </Route>
        <Route exact path="/categorias/nuevo">
          <AgregarCategoria consultarCategorias={consultarCategorias}/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
