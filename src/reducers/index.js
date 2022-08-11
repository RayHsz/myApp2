import {combineReducers} from 'redux'
import counter from './counter'
import hospital from "./hospital";
import aiGuidance from "./aiGuidance";
import assess from "./assess"

export default combineReducers({
  counter,
  hospital,
  aiGuidance,
  assess
})
