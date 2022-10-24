import React, { useRef } from "react";
import login_logo from "../images/logo-react-icon.png";
import "./LoginSignup.css";

const Login = (props) => {
    const usernameRef = useRef("");
    const passwordRef = useRef("");

    const signinSubmitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <div className="container">
            <div className="logo-name">
                <img className="logo" src={login_logo} alt="React-Logo" />
                <div className="logo-text">MySite</div>
            </div>
            <form onSubmit={signinSubmitHandler}>
                <h1 className="signin-text">Sign in to your account</h1>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="Username"
                        type="text"
                        placeholder="username"
                        required="required"
                        ref={usernameRef}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="Password"
                        type="password"
                        placeholder="password"
                        required="required"
                        ref={passwordRef}
                    />
                </div>
                <button onClick={props.login}>Login</button>
                <div className="signup">
                    <div className="no-account">
                        Don't have an account?{" "}
                        <a href="#" style={{fontWeight: "bold"}} onClick={props.signup}>
                            SignUp
                        </a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
