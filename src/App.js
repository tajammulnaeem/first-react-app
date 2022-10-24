import React, { useState } from "react";
import Login from "./LoginSignup/Login";
import SignUp from "./LoginSignup/SignUp";
import Home from "./Home/Home";
import "./App.css";

const App = () => {
    const [loginPage, setLoginPage] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const loginHandler = () => {
        setLoginPage(!loginPage)
    }
    const logoutHandler = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    return (
        <>
            {!isLoggedIn && loginPage && <Login signup={loginHandler} login={logoutHandler}/>}
            {!isLoggedIn && !loginPage && <SignUp login={loginHandler} signup={logoutHandler}/>}
            {isLoggedIn && <Home logout={logoutHandler}></Home>}
        </>
    );
};

export default App;
