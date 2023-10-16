import React, { useState, useEffect } from 'react';
import './Players.css';
import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
  removeItemFromLocalStorage,
} from './LocalStorage';

function EnrollmentPopup({
  games,
  playersData,
  selectedPlayerId,
  onEnroll,
  onClose,
  setEnrollmentPopupOpen,
}) {
  const [selectedGame, setSelectedGame] = useState('');
  const [enrolledGames, setEnrolledGames] = useState([]);
  const [initialEnrolledGames, setInitialEnrolledGames] = useState([]);
  const [gameTitle, setGameTitle] = useState('');

  useEffect(() => {
    setInitialEnrolledGames(getItemFromLocalStorage('enrolledGames') || []);
    console.log(initialEnrolledGames)
  }, []);

  const handleEnroll = () => {
    const selectedGameObject = games.find((game) => game.title === gameTitle);

    if (selectedGameObject) {
      selectedGameObject.enrolledPlayers = selectedGameObject.enrolledPlayers || [];

      const alreadyEnrolledPlayer = selectedGameObject.enrolledPlayers.find(
        (player) => player.id === selectedPlayerId
      );

      if (alreadyEnrolledPlayer) {
        alert('Error: Player is already enrolled in this game.');
      } else {
        const updatedGames = games.map((game) => {
          if (game.title === selectedGameObject.title) {
            return {
              ...game,
              enrolledPlayers: [...(game.enrolledPlayers || []), selectedPlayerId],
            };
          }
          return game;
        });

        onEnroll(updatedGames);
        localStorage.setItem('games', JSON.stringify(updatedGames));
        setEnrollmentPopupOpen(false);
      }
    }
  };

  const clearEnrolledGames = () => {
    removeItemFromLocalStorage('enrolledGames');
  };

  return (
    <div className="enrollment-popup">
      <h3>Enroll Player in a Game</h3>
      <select
        className="game-select"
        value={gameTitle}
        onChange={(e) => setGameTitle(e.target.value)}
      >
        <option value="">Select a game</option>
        {games.map((game) => (
          <option key={game.id} value={game.title}>
            {game.title}
          </option>
        ))}
      </select>
      <button onClick={handleEnroll}>Enroll</button>
      <button className="cancel-btn" onClick={onClose}>
        Cancel
      </button>
      <button className="cancel-btn" onClick={clearEnrolledGames}>
        Clear Enrolled Games
      </button>
    </div>
  );
}

export default EnrollmentPopup;
