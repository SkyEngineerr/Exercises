import { SET_ALERT, CLEAR_USERS, CHANGE_HANDLER,
    SUBMIT_HANDLER
} from  './types'
import axios from 'axios';


// export  const  searchText  = (text) =>  async  dispatch  => {
//     const  res  =  await axios.get(`https://api.github.com/search/users?q=${text}`);
//     dispatch({
//           type:  SEARCH_TEXT,
//           payload:  res.data
//          })
//     }

export  const  setAlert  = (msg, type) =>   dispatch  => {
     dispatch({
        type:  SET_ALERT,
        payload:  { msg, type }
    })

    setTimeout(() => {
        dispatch({
            type:  SET_ALERT,
            payload:  null
        })
      }, 5000);
}

export  const  clearUsers  = (msg, type) =>   dispatch  => {
     dispatch({
        type:  CLEAR_USERS,
        payload:  []
    })
}


export  const  changeHandler = (e) =>   dispatch  => {
    dispatch({
        type:  CHANGE_HANDLER,
        payload:  e.target.value
    })
}

export  const  submitHandler = (e) =>  async  dispatch  => {
    e.preventDefault()
    const  res  =  await axios.get(`https://api.github.com/search/users?q=${e.target[0].value}`);
    dispatch({
        type:  SUBMIT_HANDLER,
        payload: '',
        kullanicilar : res.data.items
    })
}