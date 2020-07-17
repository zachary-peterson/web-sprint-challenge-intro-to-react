import React, { useState, useEffect } from 'react';
import App from '../App';
import axios from 'axios';
import styled from 'styled-components'
import '../App.css'



//Write your Character component here
export default function Character(props){

const info = props.info;

const StyledChar = styled.div`
    width: 75%;
    background-color: #FFFFFF;
    color: #000000;
    text-align: center;
    margin: 1% auto;

    button {
        margin: 1%;
        background-color: #000000;
        color: #FFFFFF;
    }
`

console.log(props.info)

return info.map(ch => {
    return (
    <StyledChar key={ch.name}>
        <p>{ch.name}</p>
        <p>{ch['birth_year']}</p>
    </StyledChar>
);
})
}

