import React from "react";
import TicketList from "../../components/TicketList";
import { useHistory } from "react-router-dom";
import "./StudentDashboard.css";
import StudentNav from "./StudentNav";

const StudentDashboard = () => {

  // const history = useHistory();

  // const goNewTicketForm = () => {
  //   console.log("Going to new ticket form");
  //   history.push("/new_ticket_form");
  // };

  return (
    <div>
      <StudentNav />

      <h2 style={{ fontFamily: "Roboto Mono , serif" }}>My Tickets</h2>

      <div className="ticketBar">
        <h3 style={{ fontFamily: "Roboto Mono , serif" }}>Open Tickets</h3>
        <h3 style={{ fontFamily: "Roboto Mono , serif" }}>Resolved Tickets</h3>
      </div>

      <TicketList />
    </div>
  );
};

export default StudentDashboard;
