const initialTicketState = {
    tickets: [
        {
            title:'',
            description:'',
            id:''
        }
    ]
}

export const ticketReducer = (state = initialTicketState, action) => {
    switch(action.payload){
        default:
            return state;
    }
} 