import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootReducer";

const Store = configureStore({ reducer: rootReducer });

export default Store;