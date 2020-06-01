import { NEXT_STEP, PREV_STEP, HANDLE_FIRSTNAME, HANDLE_LASTNAME,
    HANDLE_EMAIL, HANDLE_OCCUPATION, HANDLE_CITY, HANDLE_BIO
} from  './types'


export  const  nextStep  = () =>   dispatch  => {
    dispatch({
        type:  NEXT_STEP,
        payload:  1
    })
}
export  const  prevStep  = () =>   dispatch  => {
    dispatch({
        type:  PREV_STEP,
        payload:  1
    })
}
export  const  handleFirstname = (e) =>   dispatch  => {
    dispatch({
        type:  HANDLE_FIRSTNAME,
        payload:  e.target.value
    })
}
export  const  handleLastname = (e) =>   dispatch  => {
    dispatch({
        type:  HANDLE_LASTNAME,
        payload:  e.target.value
    })
}
export  const  handleEmail = (e) =>   dispatch  => {
    dispatch({
        type:  HANDLE_EMAIL,
        payload:  e.target.value
    })
}
export  const  handleOccupation = (e) =>   dispatch  => {
    dispatch({
        type:  HANDLE_OCCUPATION,
        payload:  e.target.value
    })
}
export  const  handleCity = (e) =>   dispatch  => {
    dispatch({
        type:  HANDLE_CITY,
        payload:  e.target.value
    })
}
export  const  handleBio = (e) =>   dispatch  => {
    dispatch({
        type:  HANDLE_BIO,
        payload:  e.target.value
    })
}
