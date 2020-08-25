import React, { useState, useEffect } from 'react';
import data from './HelperData';
import styled from 'styled-components';

const TicketDiv = styled.div `
    background-color: pink;
    // display: flex;
    // flex-direction: column;
    // align-items:center;
    // padding: 10px 0;

`;

const StudentTicket = ()=>{
    const [studentTick, setStudentTick]= useState([]);
    useEffect(()=>{
        setStudentTick(data)
    },[])
    return (
        <div>
            {studentTick.map((item)=>(
             <TicketDiv>   
           <h2>{item.title}</h2>
           <p>Description: {item.description}</p>
           <p>Category: {item.category}</p>
           <p>Attempt to solve: {item.solutionsTried}</p>
           <p>Ticket assigned to: {item.ticketAssigned}</p>
           </TicketDiv>
           ))}
        </div>
    )
}
export default StudentTicket