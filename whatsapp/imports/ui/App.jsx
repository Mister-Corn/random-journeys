import React from "react";
// Components
import { Link, Router } from "@reach/router";
import Hello from "./Hello.jsx";
import Info from "./Info.jsx";

const App = () => (
  <div>
    <h1>WhatsApp Clone</h1>
    <div className="links">
      <Link to="/favorites">Favorites</Link>
      <Link to="/recents">Recents</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/chats">Chats</Link>
      <Link to="/settings">settings</Link>
    </div>
  </div>
);

export default App;
