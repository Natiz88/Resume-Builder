import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootReducer";
import InfoSlice from "./reducers/InfoReducer";
import CounterSlice from "./reducers/CounterSlice";
import InfoReducer from "./reducers/InfoReducer";

export const store = configureStore({ reducer: 
    {
    counter:CounterSlice,
    info:InfoReducer
} 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;