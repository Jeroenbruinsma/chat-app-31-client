import React from "react";

import "./App.css";
import Chatroom from "./components/Chatroom";
import ChatroomForm from "./components/ChatroomForm";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <h1>Jeroens Chat App</h1>
      <Chatroom/>
      <ChatroomForm/>
      <Signup/>
      <br/>
      <Login/>
    </div>
  );
}

export default App;
