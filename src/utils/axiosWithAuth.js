import axios from "axios";

 const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://virtualrealityfunding.herokuapp.com"
  });
};

export default axiosWithAuth;