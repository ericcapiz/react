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
          <CardSubtitle>Ticket #: {ticket.ticketNumber}</CardSubtitle>
          <CardSubtitle className="ticket">
            Category: {ticket.category}
          </CardSubtitle>
          <CardTitle className="ticketTitle">Title: {ticket.title}</CardTitle>
          <CardText>Description: {ticket.description}</CardText>
          <CardText>What I've Tried: {ticket.effort}</CardText>
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
        </CardBody>
      </Card>
    </div>
  );
};

export default Ticket;
