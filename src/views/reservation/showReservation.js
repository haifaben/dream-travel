import { Link } from "react-router-dom";
export default function ShowReservation() {
  return (
    <div className="container py-5 mt-5 text-center">
      <h1 className="text-center">Welcome to Dream Travel</h1>
      <p>Reservation updated with succes</p>
      <Link to="/reservation" className="btn btn-primary">
        All Reservations
      </Link>
    </div>
  );
}
