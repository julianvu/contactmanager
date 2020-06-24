import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteContact } from "../../actions/contactActions";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (id) => {
    this.props.deleteContact(id);
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            onClick={this.onShowClick}
            className="las la-sort-down"
            style={{ cursor: "pointer" }}
          ></i>
          <i
            className="las la-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick.bind(this, id)}
          ></i>
          <Link to={`contact/edit/${id}`}>
            <i
              className="las la-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                marginRight: "1rem",
              }}
            ></i>
          </Link>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default connect(null, { deleteContact })(Contact);
