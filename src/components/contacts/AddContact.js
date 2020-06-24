import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({
        errors: {
          name: "Name is required",
        },
      });
      return;
    }
    if (email === "") {
      this.setState({
        errors: {
          email: "Email is required",
        },
      });
      return;
    }
    if (phone === "") {
      this.setState({
        errors: {
          phone: "Phone number is required",
        },
      });
      return;
    }

    const newContact = {
      name,
      email,
      phone,
    };

    /**
     * SUBMIT CONTACT
     */

    // Clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });

    this.props.history.push("/");
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            ></TextInputGroup>
            <TextInputGroup
              label="Email"
              name="email"
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            ></TextInputGroup>
            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone number"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
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
  }
}

export default AddContact;
