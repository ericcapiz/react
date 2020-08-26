import React, { useState, useEffect } from "react";
import dummyData from "./students/dummyData";
import Ticket from "../components/students/Ticket";
import { axiosAuth } from "./utils/axiosAuth";
import { useParams } from "react-router-dom";
import { Spinner } from 'reactstrap';

const TicketList = () => {

  const [tickets, setTickets] = useState();

  const params = useParams();

  useEffect(() => {

    const id = params.id;
    console.log('This is my params', params)

    axiosAuth()
    .get(`/api/tickets/`)
    .then(response => {
          console.log(response.data);
          setTickets(response.data);
   
        })
        .catch(error => {
          console.error(error);
        });

  },[params.id]);


  if (!tickets) return <Spinner color="info"/>;


  return (
    <div>
      {tickets.map((ticket) => {
        return <Ticket key={ticket.ticket_id} ticket={ticket} />;
      })}
    </div>
  );
};

export default TicketList;
