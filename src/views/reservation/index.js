import { Switch, Route } from "react-router-dom";
import AllReservations from "./Allreservation";
import ShowReservation from "./showReservation";
import EditReservation from "./editReservation";
import CreateReservation from "./createReservation";
import PageError from "../PageError";

import AuthMiddleWare from "../../components/AuthMiddleWare";

function Reservation() {
  return (
    <Switch>
      <Route path="/reservation" exact>
        <AuthMiddleWare isProtected>
          <AllReservations />
        </AuthMiddleWare>
      </Route>

      <Route path="/reservation/create" exact>
        <AuthMiddleWare isProtected>
          <CreateReservation />
        </AuthMiddleWare>
      </Route>

      <Route path="/reservation/:reservationId/edit">
        <AuthMiddleWare isAdmin>
          <EditReservation />
        </AuthMiddleWare>
      </Route>

      <Route path="/reservation/:reservationId" exact>
        <AuthMiddleWare isProtected>
          <ShowReservation />
        </AuthMiddleWare>
      </Route>
      <Route>
        <PageError code="404" />
      </Route>
    </Switch>
  );
}

export default Reservation;
