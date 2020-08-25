import axios from 'axios'

export const SET_GETTING_TICKET_DATA = 'SET_GETTING_TICKET_DATA'
export const SET_TICKET_DATA = 'SET_TICKET_DATA'
export const SET_TICKET_ERROR = 'SET_TICKET_ERROR'
export const ADD_NEW_TICKET = 'ADD_NEW_TICKET'
export const SET_NEW_TICKET = 'SET_NEW_TICKET'

export const getTicketData = () => dispatch => {
    dispatch({ type: SET_GETTING_TICKET_DATA })
    axios
    .get()
    .then(res => {
        console.log('api', res.data)
        dispatch({ type: SET_TICKET_DATA, payload: res.data })
    })
    .catch(err => {
        console.log('get API failed', err.message)
        dispatch({ type: SET_TICKET_ERROR, payload: err.message })
    })
}

export const addNewTicket = (tickets) => dispatch => {
    console.log('add', dispatch)
    dispatch({ type: ADD_NEW_TICKET })
    axios
    .post()
    .then(res => {
        console.log('api', res.data)
        dispatch({ type: SET_NEW_TICKET, payload: res.data})
    })
    .catch(err => {
        console.log('API failed', err.message)
    })
}