import React, { useState } from "react";
import { MessagesRequests } from "../../API/MessagesRequests";
import s from "./Main.module.css";

function Main() {
  const [ownEmail, setOwnEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    console.log(ownEmail);
    console.log(user);
    console.log(password);
    console.log(recipientEmail);
    console.log(subject);
    console.log(message);
    MessagesRequests.sendMessage();
  };
  return (
    <div>
      <h1>My best CV sender</h1>
      <div className={s.main}>
        <div className="ownEmail">
          <span> Developer Email :</span>{" "}
          <input
            type="text"
            placeholder="Own Email"
            value={ownEmail}
            onChange={(e) => {
              setOwnEmail(e.target.value);
            }}
          />
        </div>
        <div className="user">
          <span>User : </span>
          <input
            type="text"
            placeholder="User name email"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </div>
        <div className="password">
          <span>Password : </span>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="recipient">
          <span>Recipient Email : </span>
          <input
            type="text"
            placeholder="Recipient email"
            value={recipientEmail}
            onChange={(e) => {
              setRecipientEmail(e.target.value);
            }}
          />
        </div>
        <div className="subject">
          <span>Subject : </span>
          <input
            type="text"
            placeholder="Email Subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </div>
        <div className="message">
          <span>Message : </span>
          <textarea
            placeholder="Add Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <button onClick={sendEmail}>Send</button>
      </div>
    </div>
  );
}

export default Main;
