import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { calendarReducer } from "./calendar-reducer";

const reducers = combineReducers({
    calendar: calendarReducer,
});

const store = configureStore({ reducer: reducers });

export default store;
