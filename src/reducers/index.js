import {combineReducers} from 'redux'
import counter from './counter'
import hospital from "./hospital";
import aiGuidance from "./aiGuidance";
import assess from "./assess";
import loopImg from "./loopImg";
import hospital1 from "./hospital1";
import user from "./user"
export default combineReducers({
  counter,
  hospital,
  aiGuidance,
  assess,
  loopImg,
  hospital1,
  user,
})
