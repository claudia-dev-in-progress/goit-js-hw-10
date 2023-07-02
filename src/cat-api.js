import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
  "live_CtJ24uPP3Xf8vmKdnq25TZ25FuT4jlXStDbPKkBlNLCXAmixMAgzEYgQuJiJKqIx";

function fetchBreeds() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

function fetchCatByBreed(breedId) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export { fetchBreeds, fetchCatByBreed };
