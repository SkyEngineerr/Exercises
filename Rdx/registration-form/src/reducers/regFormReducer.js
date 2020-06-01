import { NEXT_STEP, PREV_STEP, HANDLE_FIRSTNAME, HANDLE_LASTNAME,
    HANDLE_EMAIL, HANDLE_OCCUPATION, HANDLE_CITY, HANDLE_BIO } from  '../actions/types.js'

const  initialState  = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
}

export  default  function (state  =  initialState, action) {
	switch (action.type) {
		case  NEXT_STEP:
			return {
				...state,
				step:  state.step + action.payload
				};
		case  PREV_STEP:
			return {
				...state,
				step:  state.step - action.payload
				};
		case  HANDLE_FIRSTNAME:
			return {
				...state,
				firstName: action.payload,
				};
		case  HANDLE_LASTNAME:
			return {
				...state,
				lastName: action.payload,
				};
		case  HANDLE_EMAIL:
			return {
				...state,
				email: action.payload,
				};
		case  HANDLE_OCCUPATION:
			return {
				...state,
				occupation: action.payload,
				};
		case  HANDLE_CITY:
			return {
				...state,
				city: action.payload,
				};
		case  HANDLE_BIO:
			return {
				...state,
				bio: action.payload,
				};
		default:
			return  state;
     }
}