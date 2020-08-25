import React, { useState } from "react";
import dummyData from "./students/dummyData";
import Ticket from "../components/students/Ticket";

const TicketList = () => {
  const [tickets, setTickets] = useState(dummyData);

  return (
    <div>
      {tickets.map((ticket) => {
        return <Ticket key={ticket.ticketNumber} ticket={ticket} />;
      })}
    </div>
  );
};

export default TicketList;
