import React from 'react';
import styled from 'styled-components';
import phone from './phone.png';

const MainDiv =styled.div `
    display: flex;
    justify-content: space-evenly;
    margin-top: 100px;
`
const SideDiv = styled.div `
display: flex;
flex-direction: column;
margin-top: 150px;
button{
    color:black;
    border-radius:10px;
    background-color: #48c8e8;
    height: 50px;
    font-size:20px;
}
`
const SideDiv2 = styled.div `
display: flex;
height: 500px;
width: 100vh;

img{
    object-fit:scale-down;
    // height: 500px;
}
`

const HelperBody = ()=>{
    return(
        <MainDiv>
        <SideDiv>
        <h1>Making it easier to help students</h1>
        <p>View student help requests and assign tickets to yourself and others</p>
        <button>Get Started</button>
        </SideDiv>
        <SideDiv2><img src={phone}></img></SideDiv2>
        </MainDiv>
    )

}
export default HelperBody;