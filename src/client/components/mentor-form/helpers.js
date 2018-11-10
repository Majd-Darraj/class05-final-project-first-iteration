export const Helpers = {
  updateField(e) {
    const { name, value } = e.target;

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    });
  },

  submitForm(e) {
    e.preventDefault();

    let url = "",
      method = "";

    if (this.props.isEditing) {
      url = `/api/mentors/${this.props.match.params.id}`;
      method = "PUT";
    } else {
      url = `/api/mentors`;
      method = "POST";
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
        console.log("Success:", response);
        // TODO redirect to the Mentors list page (/Mentors)
      })
      .catch(error => console.error("Error:", error));
  }
};
