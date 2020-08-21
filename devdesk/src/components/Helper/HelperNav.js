import React from 'react';
import HelperLogo from './HelperLogo';
import styled from 'styled-components';


const Nav = styled.nav `
display: flex;
justify-content: flex-end;
align-items: center;
padding: 30px;
position: relative;
border-bottom: 2px solid lightblue;


a{
    display: flex;
    padding: 0 20px;
    text-decoration: none;
    justify-content: flex-end;
}
h3{
    position: absolute;
    left: 10px;
    padding: 10px

}
span{
    font-size: 30px;
    color: teal;
    padding: 0 15px;
}


`;

const HelperNav =()=>{
    return(
        
        <Nav>
            <h3><span>Q</span>The Queue</h3>
            <a href="#">For Students</a>
            <a href="#">Features</a>
            <a href="#">Team</a>
            <a href="#">Login</a>
        </Nav>
    )
}
export default HelperNav