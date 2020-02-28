import axios from "axios";

export const API =
  "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes";

export const fetchShow = () => {
  let url = API;
  return axios
    .get(url)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};
