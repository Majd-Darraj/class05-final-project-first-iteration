import React, { Component } from "react";
import { Link } from "react-router-dom";

// import { fetchData, updateField } from "./Helpers";

class NetworkingMainForm extends Component {
  state = {
    res: [],
    data: {
      organisation_name: "",
      sector_activity: "",
      organisation_description: "",
      organisation_logo: "",
      organisation_url: "",
      organisation_address: "",
      organisation_city: "",
      organisation_postal_code: "",
      contact_person: "",
      contact_email: "",
      contact_phone: "",
      active: 1
    }
  };

  componentDidMount = () => {
    if (this.props.status) {
      debugger;
      return null;
    } else {
      debugger;
      this.setState({
        data: this.props.data
      });
    }
  };

  updateField = e => {
    const { name, value } = e.target;
    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    });
  };

  submitForm = e => {
    e.preventDefault();

    // fetchData(id, method)

    // const { id } = this.props;
    let url = "",
      method = "";
    if (this.props.status) {
      url = `/api/networking`;
      method = "POST";
    } else {
      url = `/api/networking/${this.props.match.params.id}`;
      method = "PUT";
    }

    fetch(url, {
      method,
      body: JSON.stringify(this.state.data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.text())
      .then(response => {
        alert(`Server response: ${response}`);
        this.setState({
          res: response
        });
      })
      .catch(error => console.error("Error:", error));
  };

  render() {
    const { data } = this.state;

    debugger;
    return (
      <>
        <div className="divider">
          <span className="edit-title">{data.organisation_name}</span>
        </div>

        <div className="page-content edit-content">
          <section
            className={`cards-list-container cards-list-container-events admin-container`}
            id={`edit-container`}
          >
            <div className="card-info-container">
              <article className="card-info">
                <form
                  onSubmit={this.submitForm}
                  className="edit-form"
                  autoComplete="off"
                >
                  <div>
                    <label className="stat-container">
                      <p className="card-status-title">Status</p>
                      <select
                        className={`edit-form-input 
                        ${data.active == 1 ? "active-stat" : "arch-stat"}
                      `}
                        name="active"
                        value={data.active}
                        onChange={this.updateField}
                      >
                        <option
                          value="1"
                          {...(data.active == 1 ? "selected" : "")}
                        >
                          Active
                        </option>
                        <option
                          value="0"
                          {...(data.active == 0 ? "selected" : "")}
                        >
                          Archived
                        </option>
                      </select>
                    </label>
                  </div>
                  <div>
                    <label>
                      <p>Organisation name</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="organisation_name"
                        value={data.organisation_name}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p> Sector activity</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="sector_activity"
                        value={data.sector_activity}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p>Organisation description</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="organisation_description"
                        value={data.organisation_description}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                    Organisation logo
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="organisation_logo"
                        value={data.organisation_logo}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                    Organisation url
                      <textarea
                        autoComplete="off"
                        className="edit-form-input text-area"
                        name="organisation_url"
                        value={data.organisation_url}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Organisation address
                      <textarea
                        autoComplete="off"
                        className="edit-form-input text-area"
                        name="organisation_address"
                        value={data.organisation_address}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Organisation city
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="organisation_city"
                        value={data.organisation_city}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                     Organisation postal code
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="organisation_postal_code"
                        value={data.organisation_postal_code}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>

                  <div>
                    <label>
                    Contact person
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="contact_person"
                        value={data.contact_person}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Contact email
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="contact_email"
                        value={data.contact_email}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      End hour
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="contact_phone"
                        value={data.contact_phone}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div className="form-btns">
                    <button id="confirm" className="readmore" type="submit">
                      {" "}
                      Submit
                    </button>
                    <Link id="cancel" className="readmore " to={`/admin`}>
                      Cancel
                    </Link>
                  </div>
                </form>
              </article>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default NetworkingMainForm;
