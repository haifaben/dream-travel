import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function AllTravellers({ user }) {
  const [travellers, setTravellers] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const deleteTraveller = (travellerUsername) => {
    axios
      .delete("/traveller/" + travellerUsername)
      .then((res) => {
        setDeleted(true);

        /*deleted = true;
        setDeleted(deleted);*/
      })
      .catch((err) => {
        setDeleted(false);
        /*deleted = false;
        setDeleted(deleted);*/
      });
    if (deleted) return <Redirect to="/dashboard"></Redirect>;
  };

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

  return (
    <>
      <div className="container py-5 mt-5">
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {user?.role === "ADMIN" ? (
            <Link to="/dashboard/create" className="btn btn-primary">
              <i className="fas fa-plus me-3"></i> Create new traveller
            </Link>
          ) : (
            <></>
          )}
          {/*<ul>
            {travellers.map((e, k) => (
              <li key={k}>
                <Link to={`/dashboard/${e.username}`}>{e.fullName}</Link>
              </li>
            ))}
            </ul>*/}
        </div>

        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h2>All Travellers</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Username</th>
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">email</th>
                  <th scope="col">birthDay</th>
                </tr>
              </thead>
              <tbody>
                {travellers.map((e, k) => (
                  <tr key={k}>
                    <td>{e.username}</td>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.email}</td>
                    <td>{e.birthDay}</td>
                    <td>
                      <Link
                        to={`/dashboard/${e.username}/edit`}
                        className="btn btn-primary"
                      >
                        <i className="fas fa-edit"></i>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteTraveller(e.username)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, {})(AllTravellers);
