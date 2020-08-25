import React from 'react';
import styled from 'styled-components';
import HelperNav from './HelperNav';


const MainDiv = styled.div `
    font-size: 4rem;
    margin: 80px;

`;
const SubDiv = styled.div `
font-size: 20px;
display: flex;
justify-content: center;
align-content: center;
background-color: rgba(228, 241, 254, 0.5);
h1{
    width: 500px;
    font-size: 30px;
    padding: 30px 200px;
    &:hover{
        border-bottom: 2px solid red;
    }
}
`;


const HelperTickets = ()=>{
    return(
        <div>
            <HelperNav />
        <MainDiv>
            Ticket Queue
            <SubDiv>
        <h1>All Tickets</h1>
        <h1>My Tickets</h1>
        </SubDiv>
        </MainDiv>
        </div>
    )
}
export default HelperTickets;