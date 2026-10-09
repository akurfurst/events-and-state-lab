//import { useState } from "react";
import Message from "./Message.jsx";
//import { SEED_MESSAGES } from "../data.js";

export default function MessageList({ messages }) {
  //const [messages, setMessages] = useState(SEED_MESSAGES);
  return (
    <ul className="messages">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </ul>
  );
}
