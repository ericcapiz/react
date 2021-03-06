import { axiosAuth } from "../utils/axiosAuth";

export const SET_GETTING_TICKET_DATA = "SET_GETTING_TICKET_DATA";
export const SET_TICKET_DATA = "SET_TICKET_DATA";
export const SET_TICKET_ERROR = "SET_TICKET_ERROR";
export const ADD_NEW_TICKET = "ADD_NEW_TICKET";
export const SET_NEW_TICKET = "SET_NEW_TICKET";

export const getTicketData = () => (dispatch) => {
  console.log("data", dispatch);
  dispatch({ type: SET_GETTING_TICKET_DATA });
  axiosAuth()
    .get("/api/tickets")
    .then((res) => {
      console.log("api", res.data);
      dispatch({ type: SET_TICKET_DATA, payload: res.data });
    })
    .catch((err) => {
      console.log("get API failed", err.message);
      dispatch({ type: SET_TICKET_ERROR, payload: err.message });
    });
};

export const addNewTicket = (tickets) => (dispatch) => {
  console.log("add", dispatch);
  dispatch({ type: ADD_NEW_TICKET });
  axiosAuth()
    .post("/api/tickets", tickets)
    .then((res) => {
      console.log("api", res.data);
      // dispatch({ type: SET_NEW_TICKET, payload: res.data})
    })
    .catch((err) => {
      console.log("API failed", err.message);
    });
};

// export const login = (user) => dispatch => {
//     console.log('login', dispatch)
//     dispatch()
// }
