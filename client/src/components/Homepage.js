import React from "react";
import axios from 'axios';
import {useState, useEffect } from 'react';

export default function Homepage() {
    const [data, setData] = useState([{}])

    useEffect(() => {
        //fetch("/predict").then(res => res.json()).then(
        //data => {
            //setData(data)
            // check if the data is correctly fetched 
            // console.log(data)
        //})
    }, [])

    return (
        <div>
            {(typeof data.transactions == "undefined") ? (
                <p> loading </p>
            ): 
            (data.transactions.map((transactions, i) => (
                <p key={i}> transaction: {transactions}</p>
            )))}
        </div>
    );
}



