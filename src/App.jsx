import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Home";
import { Home } from "./pages/Home";
import { Employees } from "./pages/Employess";

import "./styles.css";

export const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/employees" component={Employees} />
    </Switch>
  </Router>
);
