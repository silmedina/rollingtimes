import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import Inicio from './components/Inicio';

function App() {
  return (
    <Router>
      <Navegacion />
      <Switch>
        <Route>
          <Inicio exact path='/' />
        </Route>
        {/* poner las demas rutas aqui */}
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
