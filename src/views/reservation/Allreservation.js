import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function AllReservation({ user }) {
  const [reservations, setReservations] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const deleteReservation = (reservationId) => {
    axios
      .delete("/reservation/" + reservationId)
      .then((res) => {
        setDeleted(true);
      })
      .catch((err) => {
        setDeleted(false);
      });
  };

  useEffect(() => {
    axios
      .get("/reservation")
      .then((res) => {
        setReservations(res.data);
      })
      .catch((err) => {
        setReservations([]);
      });
  }, []);

  return (
    <>
      <div className="container py-5 mt-5">
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {user?.role === "ADMIN" ? (
            <Link to="/reservation/create" className="btn btn-primary">
              <i className="fas fa-plus me-3"></i> Create new reservation
            </Link>
          ) : (
            <></>
          )}
          {/*<ul>
            {reservations.map((e) => (
              <li key={e.id}>
                <Link to={`/resrvation/${e.firstName}`}>{e.firstName}</Link>
              </li>
            ))}
            </ul>*/}
        </div>

        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h2>All Reservations</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">email</th>
                  <th scope="col">Date de départ</th>
                  <th scope="col">Date de retour</th>
                  <th scope="col">Destinations</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((e) => (
                  <tr key={e.id}>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.mobile}</td>
                    <td>{e.email}</td>
                    <td>{e.dateDep}</td>
                    <td>{e.datert}</td>
                    <td>{e.destinations}</td>
                    <td>
                      <Link
                        to={`/reservation/${e.id}/edit`}
                        className="btn btn-primary"
                      >
                        <i className="fas fa-edit"></i>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteReservation(e.id)}
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
export default connect(mapStateToProps, {})(AllReservation);
