const initialTicketState = {
    tickets: [
        {
            ticketNumber: '',
            category: '',
            title: '',
            description: '',
            effort: '',
        }
    ]
}

export const ticketReducer = (state = initialTicketState, action) => {
    switch(action.payload){
        default:
            return state;
    }
} 