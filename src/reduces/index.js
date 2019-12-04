import comments from "./comment";
import items from "./items";

import {combineReducers} from "redux";

const reduces = combineReducers({
    comments,items
})


export default reduces;
