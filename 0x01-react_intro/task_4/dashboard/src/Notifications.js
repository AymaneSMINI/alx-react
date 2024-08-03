import React from "react";
import './Notifications.css'
import { getLatestNotification } from "./utils";
import closeImg from './close-icon.jpg'
export default function Notifications() {
    return (
            <div className='Notifications'>
                <p>Here is the list of notifications</p>
                <button aria-label="close" style={{
                    color: "#3a3a3a",
                    fontWeight: "bold",
                    background: "none",
                    border: "none",
                    fontSize: "15px",
                    position: "absolute",
                    right: "20px",
                    top: "30px",
                    cursor: "pointer",
                }} onClick={console.log("Close button has been clicked")
                }
                ><img src={closeImg} alt="close-img" style={{width: "50px"}}/></button>
                <ul>
                    <li data = 'default'>New course available</li>
                    <li data="urgent">New resume available</li>
                    <li data = 'urgent'
                    dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
                </ul>
            </div>
            )
}