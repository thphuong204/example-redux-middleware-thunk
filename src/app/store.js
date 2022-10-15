import { createStore,combineReducers } from "redux";
import counterReducer from "../features/counter/reducer";
import {composeWithDevTools} from "redux-devtools-extension";


const initialState = {}; //global state
const store = createStore(
    combineReducers({
        counter: counterReducer
    }),
    initialState,
    composeWithDevTools()
);

export default store;
