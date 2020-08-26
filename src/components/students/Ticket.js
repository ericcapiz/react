import React, { useEffect } from "react";
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

const Ticket = props => {

  useEffect(() => {
    console.log(props.tickets)
  }, [])

  return (
    <div>{props.tickets.status !="RESOLVED" ? 
      <>
      <Card className="card">
        <CardBody>
          <CardSubtitle>Ticket #: {props.tickets.ticket_id}</CardSubtitle>
          <CardSubtitle className="ticket">
            Category: {props.tickets.categories}
          </CardSubtitle>
          <CardTitle className="ticketTitle">Title: {props.tickets.title}</CardTitle>
          <CardText>Description: {props.tickets.description}</CardText>
          {/* <CardText>What I've Tried: {ticket.what_ive_tried}</CardText> */}
          <Button 
            onClick={() => console.log('hi')}
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
      </>:''}
    </div>
  );
};


export default Ticket
