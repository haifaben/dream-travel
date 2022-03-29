import { combineReducers } from "redux";

import userReducer from "./userReducer";
import travellerReducer from "./travelllerReducer";

const rootReducer = combineReducers({
  user: userReducer,
  traveller: travellerReducer,
});

export default rootReducer;
