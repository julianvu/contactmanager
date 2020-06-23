import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import Contact from "./components/contacts/AddContact";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager"></Header>
        <div className="container">
          <AddContact></AddContact>
          <Contacts></Contacts>
        </div>
      </div>
    </Provider>
  );
}

export default App;
