import React, { Component, Fragment } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "john@mail.com",
        phone: "111-111-1111",
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karen@mail.com",
        phone: "222-222-2222",
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@mail.com",
        phone: "333-333-3333",
      },
    ],
  };

  render() {
    const { contacts } = this.state;
    return (
      <Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact}></Contact>
        ))}
      </Fragment>
    );
  }
}

export default Contacts;
