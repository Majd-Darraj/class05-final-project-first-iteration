const searchData = q => {
  fetch(`/api/search?q=${q}`)
    .then(res => res.json())
    .then(json => json);
};

export default searchData;
