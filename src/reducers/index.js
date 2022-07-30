import {combineReducers} from 'redux'
import counter from './counter'
import hospital from "./hospital";

export default combineReducers({
  counter,
  hospital
})
