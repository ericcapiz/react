import React from "react";
import TicketList from "../TicketList";
import "./StudentDashboard.css";
import StudentNav from "./StudentNav";

const StudentDashboard = () => {

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
