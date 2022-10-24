import React, { useState } from "react";
import login_logo from "../images/logo-react-icon.png";
import "./LoginSignup.css";

const SignUp = (props) => {
    const [states, setStates] = useState({
        Username: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
    });

    const statesChangeHandler = (event) => {
        setStates({
            ...states,
            [event.target.name]: event.target.value,
        });
    };

    const signupSubmitHandler = (event) => {
        event.preventDefault();

        if (states.Password !== states.ConfirmPassword) {
            alert("Passwords do not match");
        }
    };

    return (
        <div id="signup" className="container">
            <div className="logo-name">
                <img className="logo" src={login_logo} alt="React-Logo" />
                <div className="logo-text">MySite</div>
            </div>
            <form onSubmit={signupSubmitHandler}>
                <h1 className="signin-text">Create your new account</h1>
                <div>
                    <label>Username</label>
                    <input
                        name="Username"
                        type="text"
                        placeholder="username"
                        value={states.Username}
                        required="required"
                        onChange={statesChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        name="Email"
                        type="email"
                        placeholder="example@gmail.com"
                        value={states.Email}
                        required="required"
                        onChange={statesChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        name="Password"
                        type="text"
                        placeholder="password"
                        value={states.Password}
                        required="required"
                        onChange={statesChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        name="ConfirmPassword"
                        type="text"
                        placeholder="confirm password"
                        value={states.ConfirmPassword}
                        required="required"
                        onChange={statesChangeHandler}
                    />
                </div>
                <button onClick={props.signup}>SignUp</button>
                <div className="signup">
                    <div className="no-account">
                        Already have an account?{" "}
                        <a href="#" style={{fontWeight: "bold"}} onClick={props.login}>
                            SignIn
                        </a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
