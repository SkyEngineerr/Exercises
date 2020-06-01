import { combineReducers } from  'redux'
import  regFormReducer  from  './regFormReducer'
//other reducers might be and should be imporetd as well here

export  default  combineReducers({
    regForm:  regFormReducer
//other state properties should be updated by the other reducers here
})