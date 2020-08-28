import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Label
} from "reactstrap";
import "./StudentDashboard.css";
import { initialState } from '../reducer/reducer'
import { axiosAuth } from '../utils/axiosAuth'

const Ticket = (props, { tickets, updateTickets, setNewTickets}) => {

  const [editing, setEditing] = useState(false);
  const [ticketToEdit, setTicketToEdit] = useState(initialState);

  const editTicket = ticket => {
    setEditing(true);
    setTicketToEdit(ticket);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosAuth()
    .put(`/api/tickets/${ticketToEdit.id}`, ticketToEdit)
    .then(res => {
      console.log(res.data)
      setNewTickets(true);
    })
    .catch(err =>
      console.log(err))
  }

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
          <CardText>What I've Tried: {props.tickets.what_ive_tried}</CardText>
          
        {editing && (
        <form onSubmit={saveEdit}>
          <legend>Edit Ticket</legend>
          <label>
            Title:
            <input
              onChange={e =>
                setTicketToEdit({ ...ticketToEdit, 
                ticket: e.target.value })
              }
              value={ticketToEdit.ticket}
            />
          </label>
          <label>
            Description:
            <input
              onChange={e =>
                setTicketToEdit({
                  ...ticketToEdit,
                  description: e.target.value })
              }
              value={ticketToEdit.description}
            />
          </label>
          <label>
            What I've Tried:
            <input
              onChange={e =>
                setTicketToEdit({
                  ...ticketToEdit,
                  what_ive_tried: e.target.value })
              }
              value={ticketToEdit.what_ive_tried}
            />
          </label>
          <label>
            Category:
            <Label htmlFor="category" className="dropDownNewTicket">
            <h4>Pick a category</h4>
            <select id="category" name="category" type="text" value={ticketToEdit.category} onChange={e =>
                setTicketToEdit({
                  ...ticketToEdit,
                  category: e.target.value })
              }>
              <option value="React">React</option>
              <option value="Back End">Back End</option>
              <option value="SASS">SASS</option>
              <option value="Animation">Animation</option>
            </select>
          </Label>
          </label>
          <Button
            type="submit"
            style={{
              marginRight: "10px",
              backgroundColor: "red",
              cursor: "pointer",
            }}
          >Save
          </Button>
        </form>
      )}
      <Button 
        onClick={() => setEditing(true)}
        style={{
          backgroundColor: "#0066cc",
          marginRight: "10px",
          cursor: "pointer",
        }}
        >Edit
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
