import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../reducers/actions/userAction";
import { Dropdown } from "react-bootstrap";

function NavBar({ user, logoutUser }) {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Dream Travel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="selected"
                  className="nav-link"
                  to="/reservation"
                >
                  Reservation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="selected"
                  className="nav-link"
                  exact
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
            {user ? (
              <>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <i className="fas fa-user-circle"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href={`/dashboard/current-user/${user.name}`}
                    >
                      {user.name}
                    </Dropdown.Item>

                    <Dropdown.Item href="/" onClick={logoutUser}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <ul className="navbar-nav  mb-2 mb-md-0">
                <li className="nav-item">
                  <NavLink
                    activeClassName="selected"
                    className="nav-link"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="selected"
                    className="nav-link"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => ({ user: state.user.user });

export default connect(mapStateToProps, { logoutUser })(NavBar);
