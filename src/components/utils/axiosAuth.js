import axios from "axios";

export const axiosAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    baseURL: "https://devdeskqueue3-pt.herokuapp.com/",
    headers: {
      Authorization: token,
    },
  });
};
