import { combineReducers } from "@reduxjs/toolkit";
import InfoSlice from "./reducers/InfoReducer";

const rootReducer = combineReducers({
  info: InfoSlice.reducer,
});

export default rootReducer;