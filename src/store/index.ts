import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import doctorsReducer from "./modules/doctors/index";

const rootReducer = combineReducers({
    doctors: doctorsReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
