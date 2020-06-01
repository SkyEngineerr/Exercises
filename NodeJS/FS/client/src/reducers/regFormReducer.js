import { HANDLE_NAME, HANDLE_PASSWORD,
    HANDLE_EMAIL, HANDLE_CITY, HANDLE_COMPANY } from  '../actions/types.js'

const  initialState  = {
    name: '',
    password: '',
    email: '',
    company: '',
    city: '',
}

export  default  function (state  =  initialState, action) {
	switch (action.type) {
		case  HANDLE_NAME:
			return {
				...state,
				name: action.payload,
				};
		case  HANDLE_EMAIL:
			return {
				...state,
				email: action.payload,
				};
		case  HANDLE_COMPANY:
			return {
				...state,
				company: action.payload,
				};
		case  HANDLE_CITY:
			return {
				...state,
				city: action.payload,
				};
		case  HANDLE_PASSWORD:
			return {
				...state,
				password: action.payload,
				};
		default:
			return  state;
     }
}