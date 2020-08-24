import React from "react";
import TicketList from "../../components/TicketList";
import { useHistory } from "react-router-dom";


const StudentDashboard = () => {

    const history = useHistory();

    const goNewTicketForm = () => {
      console.log("Going to new ticket form");
      history.push("/newticketform");
    };

    return (
        <div>

        <h1>Hi (User)</h1>

        <button onClick={goNewTicketForm}>Create a new ticket</button>
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