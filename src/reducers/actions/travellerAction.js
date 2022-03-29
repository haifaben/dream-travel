import axios from "axios";
/*** reducer */
const initialValue = { travellers: [], isLoading: true };

export default function travellerReducer(state = initialValue, action) {
  switch (action.type) {
    case "GET_TRAVELLER_SUCCESS":
      return { travellers: action.payload, isLoading: false };
    case "GET_TRAVELLER_FAIL":
      return { travellers: [], isLoading: false };
    default:
      return state;
  }
}
/*reducer*/

export const deleteTraveller = (travellerUsername) => (dispach) =>
  axios
    .delete("/traveller/" + travellerUsername)
    .then((res) =>
      dispach({ type: "Delete_Traveller_SUCCESS", payload: travellerUsername })
    )
    .catch(() => dispach({ type: "Delete_Traveller_Fail" }));

useEffect(() => {
  axios
    .get("/traveller")
    .then((res) => {
      setTravellers(res.data);
    })
    .catch((err) => {
      setTravellers([]);
    });
}, []);

export const getTravellerData = () => (dispach) =>
  axios
    .get("/traveller")
    .then((res) =>
      dispach({ type: "GET_TRAVELLER_SUCCESS", payload: res.data })
    )
    .catch(() => dispach({ type: "GET_TRAVELLER_FAIL", travellers: [] }));

export const userLoginFail = () => (dispach) =>
  dispach({ type: "NO_ACCESS_TOKEN", travellers: [] });

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
