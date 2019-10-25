import React from "react";

import "./App.css";
import Chatroom from "./components/Chatroom";
import ChatroomForm from "./components/ChatroomForm";

function App() {
  return (
    <div>
      <h1>Jeroens Chat App</h1>
      <Chatroom/>
      <ChatroomForm/>
    </div>
  );
}

export default App;
