import React, { useState, useEffect } from 'react';
import "./style.css";
import API from "../../utils/API";


const verifyUser = () =>
{
    API.verify()
    .then((res) =>
    {
        console.log(res);
    });
}

const Home = () =>
{
    useEffect(() => verifyUser(), []);

    return (
        <div className="homeDiv mt-2 p-2">
            <h2>Home Page</h2>   
        </div>
    );
}

export default Home;
