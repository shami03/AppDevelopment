<<<<<<< HEAD
// src/components/Signup.js
import React, { useState } from "react";
import './Signup.css'; // Import the CSS file

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (username && password) {
      // Simulate a signup request (you should replace this with actual registration)
      // If signup is successful, call the `onSignup` function with the username
      onSignup(username);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
=======
// src/components/Signup.js
import React, { useState } from "react";
import './Signup.css'; // Import the CSS file

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (username && password) {
      // Simulate a signup request (you should replace this with actual registration)
      // If signup is successful, call the `onSignup` function with the username
      onSignup(username);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
>>>>>>> origin/main
