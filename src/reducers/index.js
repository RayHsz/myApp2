import {combineReducers} from 'redux'
import counter from './counter'
import hospital from "./hospital";

// 该函数是用来整合各个状态管理的reducer的
export default combineReducers({
  counter,
  hospital
})
