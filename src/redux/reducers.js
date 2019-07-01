import { combineReducers } from "redux";

import peoples from "./people/reducer";

const reducers = combineReducers({
  peoples
});

export default reducers;
