import React from "react";
import TicketList from "../../components/TicketList";


const StudentDashboard = () => {

    return (
        <div>

        <h1>Hi (User)</h1>

        <button>Create a new ticket</button>
        <h3>(Search bar goes here)</h3>

        <div>
        <h3>Open Tickets</h3>
        <TicketList />
        <h3>Resolved Tickets</h3>
        </div>


        </div>


    )



}

export default StudentDashboard