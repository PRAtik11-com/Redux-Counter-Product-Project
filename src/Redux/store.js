import {  combineReducers, legacy_createStore } from "redux"
import {reducer as cartreducer } from "./product/reducer"
import {reducer as counterreducer } from "./Counter/reducer"
 
const rootelement = combineReducers({
    counter: counterreducer,
    cart : cartreducer
})

export const stores = legacy_createStore(rootelement)