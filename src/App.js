import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import Inicio from "./components/Inicio";
import ListarCategorias from "./components/ListarCategorias";
import {useState, useEffect} from 'react';

function App() {
  const [categorias, setCategorias] = useState([]);
  
  useEffect(()=>{
    consultarCategorias();
  },[]);

  const  consultarCategorias = async ()=>{
    try {
      const url = process.env.REACT_APP_URL_LISTAR_CATEGORIAS;
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
          <ListarCategorias categorias={categorias} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
