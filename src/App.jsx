import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Home";
import Homes from "./pages/Home";
import Employees from "./pages/Employess";

import "./styles.css";

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" component={Homes} exact />
      <Route path="/employees" component={Employees} />
    </Switch>
  </Router>
);

export default App;
