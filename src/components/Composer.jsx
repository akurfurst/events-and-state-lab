import { useState } from "react";
export default function Composer({onSend, onTypingChange}) {
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  function send(){
    const text = draft.trim();
    if(text === "") return;
    onSend(text);
    setDraft("");
  }

  function handelSubmit(e){
    e.preventDefault();
    send();
  }

  function handelKeyDown(e){
    if(e.key === "Enter" && !e.shiftKey){
      e.preventDefault();
      send();
    }
    if(e.key === "Escape"){
      setDraft("");
    }
  }

  return (
    <form className="composer" onSubmit={handelSubmit}>
      <textarea 
        rows={2} 
        placeholder="Type a message..." 
        value={draft} 
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={handelKeyDown}
        onFocus={() => onTypingChange(true)}
        onBlur={() => onTypingChange(false)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
