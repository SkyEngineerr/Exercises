import { combineReducers } from  'redux'
import  regFormReducer  from  './regFormReducer'
import  userFormReducer  from  './userFormReducer'
//other reducers might be and should be imporetd as well here

export  default  combineReducers({
    userForm : userFormReducer,
    regForm:  regFormReducer
})