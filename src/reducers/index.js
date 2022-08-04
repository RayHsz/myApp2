import {combineReducers} from 'redux'
import counter from './counter'
import hospital from "./hospital";
import aiGuidance from "./aiGuidance";

export default combineReducers({
  counter,
  hospital,
  aiGuidance

})
