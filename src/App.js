import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import Inicio from "./components/Inicio";
import ListarCategorias from "./components/ListarCategorias";

function App() {
  return (
    <Router>
      {/* <Navegacion /> */}
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/categorias">
          <ListarCategorias />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
