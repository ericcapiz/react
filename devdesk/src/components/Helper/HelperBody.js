import React from 'react';
import styled from 'styled-components';

const MainDiv =styled.div `
    display: flex;
    justify-content: space-evenly;
    margin-top: 100px;
`
const SideDiv = styled.div `
display: flex;
flex-direction: column;
margin-top: 150px;
`
const SideDiv2 = styled.div `
display: flex;
background-color: blue;
height: 500px;
width: 100vh;
`

const HelperBody = ()=>{
    return(
        <MainDiv>
        <SideDiv>
        <h1>Making it easier to help students</h1>
        <p>View student help requests and assign tickets to yourself and others</p>
        <button>Get Started</button>
        </SideDiv>
        <SideDiv2><h1>imag place holder on this side</h1></SideDiv2>
        </MainDiv>
    )

}
export default HelperBody;