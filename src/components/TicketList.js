import React, { useEffect /*{ useState, useEffect }*/ } from "react";
//import dummyData from "./students/dummyData";
import Ticket from "./students/Ticket";
//import { axiosAuth } from "./utils/axiosAuth";
//import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getTicketData } from "./actions/actions";

const TicketList = (props) => {
  console.log("ticket", props);

  useEffect(() => {
    props.getTicketData();
    console.log(props.tickets);
  }, []);

  if (!Array.isArray(props.tickets)) return <></>;
  return (
    <>
      {props.tickets.map((ticket) => {
        return <Ticket key={ticket.ticket_id} tickets={ticket} />;
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    user: state.user,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getTicketData })(TicketList);
