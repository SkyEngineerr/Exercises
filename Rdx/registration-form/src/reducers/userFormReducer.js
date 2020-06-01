import {  SET_ALERT, CLEAR_USERS, 
	CHANGE_HANDLER, SUBMIT_HANDLER
} from  '../actions/types'

/* this initialState below will represent the state saved in the store and any change to it here will change also the state in the store  */
/* How is that :
  - The postReducer will change the initialState here
  - The combineReducers will change the state in the rootReducer
  - The rootReducer is passed into the createStore where the original state is saved and make the change in the store.
*/
const  initialState  = {
    users: [],
    loading: false,
	alert: null,
	text: ''
}
export  default  function (state  =  initialState, action) {
	switch (action.type) {
		// case  SEARCH_TEXT:
		// 	return {
		// 		...state,
        //         loading:  false,
        //         users: action.payload.items
		// 	};
		case  SET_ALERT:
			return {
				...state,
                alert: action.payload
			};
		case  CLEAR_USERS:
			return {
				...state,
                users: action.payload,
                loading: false
			};
		case  CHANGE_HANDLER:
			return {
				...state,
                text: action.payload
			};
		case  SUBMIT_HANDLER:
			return {
				...state,
				text: action.payload,
				users: action.kullanicilar
			};
		default:
			return  state;
     }
}