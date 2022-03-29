import axios from "axios";

export const getUserData = () => (dispach) =>
  axios
    .get("/auth/current-user")
    .then((res) => dispach({ type: "AUTH_SUCCSS", user: res.data }))
    .catch(() => dispach({ type: "NO_ACCESS_TOKEN" }));

export const userLoginFail = () => (dispach) =>
  dispach({ type: "NO_ACCESS_TOKEN" });

export const loginUser = (data) => (dispach) => {
  localStorage.clear();
  axios
    .post("/auth/login", data)
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
      localStorage.setItem("token_type", res.data.token_type);
      localStorage.setItem("exipres_in", res.data.exipres_in);
      axios.defaults.headers.common["Authorization"] =
        res.data.token_type + " " + res.data.access_token;
      return dispach({ type: "AUTH_SUCCSS", user: res.data.user });
    })
    .catch(() => {
      localStorage.clear();
      return dispach({ type: "AUTH_FAIL" });
    });
};
export const userRegisterFail = () => (dispach) =>
  dispach({ type: "NO_ACCESS_TOKEN" });

export const registerUser = (data) => (dispach) => {
  localStorage.clear();
  axios
    .post("/auth/register", data)
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
      localStorage.setItem("token_type", res.data.token_type);
      localStorage.setItem("exipres_in", res.data.exipres_in);
      axios.defaults.headers.common["Authorization"] =
        res.data.token_type + " " + res.data.access_token;
      return dispach({ type: "REGISTER_SUCCSS", user: res.data.user });
    })
    .catch(() => {
      localStorage.clear();
      return dispach({ type: "REGISTER_FAIL" });
    });
};

export const logoutUser = () => (dispach) => {
  axios.defaults.headers.common["Authorization"] = "";
  localStorage.clear();
  return dispach({ type: "NO_ACCESS_TOKEN" });
};
