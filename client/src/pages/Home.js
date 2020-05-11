import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import HomeDiv from "../components/Home";


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
        <HomeDiv />
    );
}

export default Home;
