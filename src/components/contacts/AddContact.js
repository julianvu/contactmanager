import React, { Component } from "react";
import { Consumer } from "../../context";
import { v1 as uuid } from "uuid";
import TextInputGroup from "../layout/TextInputGroup";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    // Clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                  ></TextInputGroup>
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter Email"
                    type="email"
                    value={email}
                    onChange={this.onChange}
                  ></TextInputGroup>
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone number"
                    value={phone}
                    onChange={this.onChange}
                  ></TextInputGroup>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
