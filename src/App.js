import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <Header branding="Contact Manager"></Header>
            <div className="container">
                <Contact
                    name="John Doe"
                    email="jdoe@mail.com"
                    phone="555-555-5555"
                ></Contact>
                <Contact
                    name="Joseph Doe"
                    email="jodoe@mail.com"
                    phone="555-555-5556"
                ></Contact>
            </div>
        </div>
    );
}

export default App;
