import { useState } from "react";

export default function Sidebar({ channels, activeId, onSelectChannel }) {
  //function handelChannelClick(e, channel){
  //   console.log("clicked", channel.name);
  //   console.log("type:", e.type);
  //   console.log("target:", e.target.tagName, e.target.textContent);
  //   console.log("a real browser event underneath:", e.nativeEvent instanceof MouseEvent);
  // }
  //const [activeId, setActiveId] = useState("general");
  return (
    <nav className="sidebar">
      <h2>Channels</h2>
      {channels.map((channel) => (
        <button 
          key={channel.id} 
          className={channel.id === activeId ? "channel active" : "channel"} 
          onClick={() => onSelectChannel(channel.id)}
        >
          # {channel.name}
        </button>
      ))}
    </nav>
  );
}
