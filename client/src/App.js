import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home/";
import Login from "./pages/Login/";
import Signup from "./pages/Signup/";
import NoMatch from "./pages/NoMatch/";
import "./App.css";

function App()
{
    return (
        <div id="page-body">
            <div className="container-fluid">
                <Router>
                    <div>
                        <Nav />
                        <Switch> 
                            <Route exact path="/" component={Home} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/signup" component={Signup} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default App;
