import React, { useState } from "react";
import s from "./Save.module.css";

function Save() {
  const [emails, setEmails] = useState("");
  const [separatedEmails, setSeparatedEmails] = useState("");

  const onTransformEmails = () => {
    setSeparatedEmails(emails.replace(/\r?\n/g, ", "));
  };

  return (
    <div className={s.savePage}>
      <div>Your emails</div>
      <div>
        <textarea
          value={emails}
          placeholder="Place email"
          onChange={(e) => setEmails(e.target.value)}
        />
      </div>
      <div>Transform emails</div>
      <div>
        <textarea value={separatedEmails} readOnly />
      </div>
      <button onClick={onTransformEmails}>Transform</button>
    </div>
  );
}

export default Save;
