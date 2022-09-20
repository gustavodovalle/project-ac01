import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

import Login from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/sobre" component={Sobre} />
              <Route path="/Contato" component={Contato} />
            </Switch>
        </Router>
          </header>
    </div>
  );
}

export default App;
