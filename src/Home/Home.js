import React from 'react'
import "./Home.css"
import login_logo from "../images/logo-react-icon.png";

const Home = (props) => {
  return (
    <>
        <nav>
            <div className="logo-name margin">
                <img className="logo" src={login_logo} alt="React-Logo" />
                <div className="logo-text">MySite</div>
            </div>
            <ul>
                <li>User</li>
                <li>Admin</li>
                <li><a href='#' onClick={props.logout}>Logout</a></li>
            </ul>
        </nav>
        <div className='main'>
            <h2>Welcome on board.</h2>
        </div>
    </>
  )
}

export default Home