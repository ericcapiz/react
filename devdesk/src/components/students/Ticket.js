import React from 'react'


const Ticket = ( { ticket } ) => {

    return (
        
        <div>
        <p>{ticket.ticketNumber}</p>
        <p>{ticket.category}</p>
        <p>{ticket.title}</p>
        <p>{ticket.description}</p>
        <p>{ticket.effort}</p>
        </div>
    )

}

export default Ticket;