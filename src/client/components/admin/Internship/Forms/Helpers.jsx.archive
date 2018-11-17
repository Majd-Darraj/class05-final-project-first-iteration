export function fetchData(id, method) {
  fetch(`/api/events/${id}`, {
    method,
    body: JSON.stringify(this.state.data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.text())
    .then(response => {
      console.log(response);
    })
    .catch(error => console.error("Error:", error));
}

export function updateField(event) {
  const { name, value } = event.target;
  this.setState({
    data: {
      ...this.state.data,
      [name]: value
    }
  });
}
