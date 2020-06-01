import {  HANDLE_NAME, HANDLE_PASSWORD,
    HANDLE_EMAIL, HANDLE_COMPANY, HANDLE_CITY
} from  './types'


export  const  handleName = (e) =>   dispatch  => {
    dispatch({
        type:  HANDLE_NAME,
        payload:  e.target.value
    })
}

export  const  handleEmail = (e) =>   dispatch  => {
    dispatch({
        type:  HANDLE_EMAIL,
        payload:  e.target.value
    })
}

export  const  handlePassword = (e) =>   dispatch  => {
    dispatch({
        type:  HANDLE_PASSWORD,
        payload:  e.target.value
    })
}

export  const  handleCompany = (e) =>   dispatch  => {
    dispatch({
        type:  HANDLE_COMPANY,
        payload:  e.target.value
    })
}
export  const  handleCity = (e) =>   dispatch  => {
    dispatch({
        type:  HANDLE_CITY,
        payload:  e.target.value
    })
}
