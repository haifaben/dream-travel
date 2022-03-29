import { Switch, Route } from "react-router-dom";
import AllTravellers from "./AllTravellers";
import ShowTraveller from "./ShowTraveller";
import EditTraveller from "./EditTraveller";
import CreateTraveller from "./CreateTraveller";
import ShowProfile from "./ShowProfile";

import PageError from "../PageError";
import { connect } from "react-redux";

import AuthMiddleWare from "../../components/AuthMiddleWare";

function Dashboard({ user }) {
  return (
    <Switch>
      <Route path="/dashboard" exact>
        <AllTravellers />
      </Route>

      <Route path="/dashboard/create" exact>
        <AuthMiddleWare isAdmin>
          <CreateTraveller />
        </AuthMiddleWare>
      </Route>
      <Route path="/dashboard/:travellerUsername/edit">
        <AuthMiddleWare isAdmin>
          <EditTraveller />
        </AuthMiddleWare>
      </Route>
      <Route path="/dashboard/:travellerUsername" exact>
        <ShowTraveller />
      </Route>
      <Route path="/dashboard/current-user/:name" exact>
        <ShowProfile name={user.name} email={user.email} />
      </Route>

      <Route>
        <PageError code="404" />
      </Route>
    </Switch>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});
export default connect(mapStateToProps, {})(Dashboard);
