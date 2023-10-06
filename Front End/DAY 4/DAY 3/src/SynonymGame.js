<<<<<<< HEAD
// src/components/SynonymGame.js
import React, { useState } from "react";

const SynonymGame = () => {
  const [word, setWord] = useState("happy");
  const [synonym, setSynonym] = useState("");
  const [score, setScore] = useState(0);

  const handleCheckSynonym = () => {
    // Check if the entered synonym is correct
    // You can implement your synonym checking logic here

    // For this example, let's assume the synonym is correct if it matches the word
    if (synonym.toLowerCase() === word.toLowerCase()) {
      setScore(score + 1);
      // Generate a new word for the next question
      // You can replace this with your word generation logic
      setWord("excited");
      setSynonym("");
    } else {
      alert("Incorrect synonym. Try again.");
    }
  };

  return (
    <div>
      <h2>Synonym Game</h2>
      <p>Score: {score}</p>
      <p>Word: {word}</p>
      <input
        type="text"
        placeholder="Enter a synonym"
        value={synonym}
        onChange={(e) => setSynonym(e.target.value)}
      />
      <button onClick={handleCheckSynonym}>Check Synonym</button>
    </div>
  );
};

export default SynonymGame;
=======
// src/components/SynonymGame.js
import React, { useState } from "react";

const SynonymGame = () => {
  const [word, setWord] = useState("happy");
  const [synonym, setSynonym] = useState("");
  const [score, setScore] = useState(0);

  const handleCheckSynonym = () => {
    // Check if the entered synonym is correct
    // You can implement your synonym checking logic here

    // For this example, let's assume the synonym is correct if it matches the word
    if (synonym.toLowerCase() === word.toLowerCase()) {
      setScore(score + 1);
      // Generate a new word for the next question
      // You can replace this with your word generation logic
      setWord("excited");
      setSynonym("");
    } else {
      alert("Incorrect synonym. Try again.");
    }
  };

  return (
    <div>
      <h2>Synonym Game</h2>
      <p>Score: {score}</p>
      <p>Word: {word}</p>
      <input
        type="text"
        placeholder="Enter a synonym"
        value={synonym}
        onChange={(e) => setSynonym(e.target.value)}
      />
      <button onClick={handleCheckSynonym}>Check Synonym</button>
    </div>
  );
};

export default SynonymGame;
>>>>>>> origin/main
