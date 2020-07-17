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
    background-color: #000000;
    color: #FFFFFF;
    text-align: center;
    margin: 1% auto;
    border: solid 5px red;
    outline: solid 5px blue;
    transition: 1s;

    &:hover {
        width: 80%;
        font-size: 1.25rem;
    }

    p {
        color: #FFFFFF;
        font-family: 'Courier New', Courier, monospace;
    }

    .imp  {
        font-size: 2rem;
        transition: 1s;
        width: 100%;

        &:hover  {
            font-size: 2.5rem;
        }
    }


`

console.log(props.info)

return info.map(ch => {
    return (
    <StyledChar key={ch.name}>
        <p className="imp">{ch.name}</p>
        <p className="fancy">Born:</p>
        <p>{ch['birth_year']}</p>
    </StyledChar>
);
})
}

