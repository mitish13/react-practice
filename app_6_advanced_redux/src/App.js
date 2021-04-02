import ContactForm from "./components/ContactForm";
import MainScreen from "./components/MainScreen";
import Header from "./components/Header";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact component={MainScreen} />
          <Route path="/add" component={ContactForm} />
          <Route path="/edit/:id" component={ContactForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
