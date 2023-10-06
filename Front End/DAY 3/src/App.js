// src/App.js
import React, { useState } from "react";
import Login from "./Login";
import SynonymGame from "./SynonymGame";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    // Simulate a successful login by setting the user state
    setUser(username);
  };

  const handleLogout = () => {
    // Log out the user by clearing the user state
    setUser(null);
  };

  return (
    <div>
      <h1>Synonym Master App</h1>
      {user ? (
        <div>
          <p>Welcome, {user}!</p>
          <button onClick={handleLogout}>Logout</button>
          <SynonymGame />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;