import React from 'react';
import styled from 'styled-components';
import HelperNav from './HelperNav';
import StudentTicket from './Tickets';


const MainDiv = styled.div `
display: flex;
flex-direction: column;
h1{
    text-align:center;
    font-size: 4rem;
    margin: 80px;
}

`;
const SubDiv = styled.div `
font-size: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px 0;

h1{
    background-color: rgba(228, 241, 254);
    display: flex;
    align-content: center;
    width: 100%;
    font-size: 30px;
    padding: 30px 200px;
}
`;


const HelperTickets = ()=>{
    return(
        <div>
            <HelperNav />
        <MainDiv>
            <h1>Ticket Queue</h1>
            <SubDiv>
        <h1>All Tickets</h1>
        <StudentTicket />
        {/* <h1>My Tickets</h1> */}
        
        </SubDiv>
        </MainDiv>
        </div>
    )
}
export default HelperTickets;