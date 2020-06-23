import React from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager"></Header>
        <div className="container">
          <Contacts></Contacts>
        </div>
      </div>
    </Provider>
  );
}

export default App;
