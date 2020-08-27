import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./StudentDashboard.css";

const Ticket = ({ ticket }) => {
  return (
    <div>
      <Card className="card">
        <CardBody>
        <div className="categoryDiv">
          <CardSubtitle>Ticket #: {ticket.ticket_id}</CardSubtitle>
          <CardSubtitle className="ticket">
            {ticket.categories}
          </CardSubtitle>
          </div>
          <CardTitle className="ticketTitle">Title: {ticket.title}</CardTitle>
          <CardText>Description: {ticket.description}</CardText>
          {/* <CardText>What I've Tried: {ticket.what_ive_tried}</CardText> */}
          <div className="ticketButtons">
          <Button
            style={{
              backgroundColor: "#0066cc",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            Edit
          </Button>
          <Button
            style={{
              marginRight: "10px",
              backgroundColor: "red",
              cursor: "pointer",
            }}
          >
            Delete
          </Button>
          <Button
            style={{
              marginRight: "10px",
              backgroundColor: "green",
              cursor: "pointer",
            }}
          >
            Resolve
          </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Ticket;
