export const initialTicketState = {
    tickets: [
        {
            title: '',
            description: '',
            id: ''
        }
    ]
}

export const ticketReducer = (state=initialTicketState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}