import React, { useState, useEffect } from 'react';
import "./style.css";
import API from "../../utils/API";

const Signup = () =>
{
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
  
    const handleSubmit = (evt) =>
    {
        evt.preventDefault();
        console.log("name: " + userName);
        console.log("password: " + password);
        console.log("confirm: " + confirm);
    }

    return (
        <div className="signupPage">
            <div className="row m-2">
                <div className="col-md-9 mt-2 p-2"></div>

                <div  className="col-md-3">
                    <div className="signupHeader p-2">
                        <h2>Signup</h2>
                    </div>

                    <div className="signupBox p-2">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="userName"><h4>Username</h4></label>
                            <input type="text" className="signupInput" id="userName" onChange={e => setUserName(e.target.value)} />
                            <label htmlFor="password"><h4>Password</h4></label>
                            <input type="text" className="signupInput" id="password" onChange={e => setPassword(e.target.value)} />
                            <label htmlFor="confirm"><h4>Confirm Password</h4></label>
                            <input type="text" className="signupInput" id="confirm" onChange={e => setConfirm(e.target.value)} />
                            <input type="submit" className="btn btn-outline-info mt-3" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;