import React from "react";
// Components
import { Link, Router } from "@reach/router";
import Favorites from "./Favorites";
import Recents from "./Recents";
import Contacts from "./Contacts";
import Chats from "./Chats";
import Settings from "./Settings";

const App = () => (
  <div>
    <h1>WhatsApp Clone</h1>
    <div className="links">
      <Link to="/favorites">Favorites</Link>
      <Link to="/recents">Recents</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/chats">Chats</Link>
      <Link to="/settings">Settings</Link>
    </div>
    <Router>
      <Favorites path="/favorites" />
      <Recents path="/recents" />
      <Contacts path="/contacts" />
      <Chats path="/chats" />
      <Settings path="/settings" />
    </Router>
  </div>
);

export default App;
