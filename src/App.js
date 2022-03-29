import LandingPage from "./views/LandingPage";
//import Pricing from "./views/Pricing";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import Reservation from "./views/reservation";
import { Switch, Route } from "react-router-dom";
import PageError from "./views/PageError";
import Carousel from "./views/Carousel";
//import TestHook from "./views/TestHook";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import axios from "axios";
import { getUserData, userLoginFail } from "./reducers/actions/userAction";
// import { initialValue, userReducer } from './reducers/user'
import AuthMiddleWare from "./components/AuthMiddleWare";
import { connect } from "react-redux";

function Waiting() {
  return (
    <div className="loader">
      <h1>Loading</h1>
      <i className="fas fa-spinner fa-spin"></i>
    </div>
  );
}

function refreshToken(callback, reject) {
  const refresh_token = localStorage.getItem("refresh_token");
  if (refresh_token) {
    axios
      .post("/auth/refresh-token", { refresh_token: refresh_token })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        localStorage.setItem("token_type", res.data.token_type);
        localStorage.setItem("exipres_in", res.data.exipres_in);
        axios.defaults.headers.common["Authorization"] =
          res.data.token_type + " " + res.data.access_token;

        if (typeof callback === "function") {
          callback();
        }
      })
      .catch((err) => {
        localStorage.clear();
        axios.defaults.headers.common["Authorization"] = "";
        if (typeof reject === "function") {
          reject();
        }
      });
  } else {
    if (typeof reject === "function") {
      reject();
    }
  }
}

function App({ getUserData, userLoginFail, isLoading }) {
  useEffect(() => {
    refreshToken(getUserData, userLoginFail);
  }, [userLoginFail, getUserData]);

  useEffect(() => {
    const exipres_in = parseInt(localStorage.getItem("exipres_in") ?? 15);
    // 80000 = (60s * 2 * 1000 (1s = 1000ms)) / 3
    const timer = setInterval(refreshToken, exipres_in * 80000);
    return () => clearInterval(timer);
  }, []);

  if (isLoading) return <Waiting />;

  return (
    <>
      <NavBar />
      <Carousel />
      <section>
        <Switch>
          <Route path="/login" exact>
            <AuthMiddleWare isAnonymous>
              <Login />
            </AuthMiddleWare>
          </Route>
          <Route path="/register" exact>
            <AuthMiddleWare isAnonymous>
              <Register />
            </AuthMiddleWare>
          </Route>
          <Route path="/dashboard">
            <AuthMiddleWare isProtected>
              <Dashboard />
            </AuthMiddleWare>
          </Route>
          <Route path="/reservation">
            <Reservation />
          </Route>
          {/*<Route path="/test">
            <TestHook />
          </Route>*/}
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route>
            {/* <LandingPage popup='404 not found' /> */}
            {/* <Redirect to='/' />*/}
            <PageError code="404" />
          </Route>
        </Switch>
      </section>
      <Footer />
    </>
  );
  // return <Carousel />
}

const mapStateToProps = (state) => ({ isLoading: state.user.isLoading });

export default connect(mapStateToProps, { getUserData, userLoginFail })(App);
