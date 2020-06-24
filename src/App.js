import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager"></Header>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/contact/add" component={AddContact}></Route>
              <Route exact path="/about/:id" component={About}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
