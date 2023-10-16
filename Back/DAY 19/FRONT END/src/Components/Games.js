import React, { useState, useEffect } from 'react';
import './Games.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { getGameData, setGameData } from './GameData'; 
import { useSelector } from 'react-redux';

function Games() {
  const [isOpen, setIsOpen] = useState(false);
  const [gameData, setGameDataState] = useState(getGameData());
  const [editingGame, setEditingGame] = useState(null); 
  const userType = useSelector((state) => state.user.userType);

  const [formErrors, setFormErrors] = useState({
    title: '',
    description: '',
    imageSrc: '',
    publisher: '',
  });

  useEffect(() => {
    setGameData(gameData);
  }, [gameData]);

  const togglePopup = (game = null) => {
    if (game) {
      setEditingGame(game);
    } else {
      setEditingGame(null);
    }
    setFormErrors({
      title: '',
      description: '',
      imageSrc: '',
      publisher: '',
    });
    setIsOpen(!isOpen);
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.title.trim()) {
      errors.title = 'Title is required';
    }

    if (!data.description.trim()) {
      errors.description = 'Description is required';
    } else {
      errors.description = '';
    }

    if (!data.imageSrc.trim()) {
      errors.imageSrc = 'Image URL is required';
    } else {
      errors.imageSrc = '';
    }

    if (!data.publisher.trim()) {
      errors.publisher = 'Publisher name is required';
    } else {
      errors.publisher = '';
    }

    return errors;
  };

  const handleFieldChange = (field, value) => {
    setFormErrors({ ...formErrors, [field]: '' });
  };

  const addOrUpdateGame = (newGame) => {
    const errors = validateForm(newGame);
    if (Object.keys(errors).some((key) => errors[key])) {
      setFormErrors(errors);
      return;
    }
  
    if (editingGame) {
      const updatedData = gameData.map((game) =>
        game.id === editingGame.id ? newGame : game
      );
      setGameDataState(updatedData);
    } else {
      const newId = gameData.length > 0 ? Math.max(...gameData.map((game) => game.id)) + 1 : 1;
      const newGameWithId = { ...newGame, id: newId };
      setGameDataState([...gameData, newGameWithId]);
      const updatedGameData = [...gameData, newGameWithId];
      setGameData(updatedGameData);
    }
    setIsOpen(false);
  };
  
  const deleteGame = (gameId) => {
    if (window.confirm("Are you sure?")) {
      const updatedData = gameData.filter((game) => game.id !== gameId);
      setGameDataState(updatedData);
    }
  };

  return (
    <div className="games">
      <div className="head">
        <h2>GAMES LIST</h2>
        {userType === 'admin' && (
          <>
            <button onClick={() => togglePopup()} className="add-btn">
              ADD GAME
            </button>
            {isOpen && (
              <div className="popup">
                <h3>{editingGame ? 'EDIT A GAME' : 'ADD A GAME'}</h3>
                <input
                  type="text"
                  className="game-title"
                  placeholder="Game Title"
                  defaultValue={editingGame ? editingGame.title : ''}
                  onChange={(e) => handleFieldChange('title', e.target.value)}
                />
                {formErrors.title && <p className="error">{formErrors.title}</p>}
                <input
                  type="text"
                  className="game-desc"
                  placeholder="Game Description"
                  defaultValue={editingGame ? editingGame.description : ''}
                  onChange={(e) => handleFieldChange('description', e.target.value)}
                />
                {formErrors.description && <p className="error">{formErrors.description}</p>}
                <input
                  type="text"
                  className="game-url"
                  placeholder="Game Thumbnail URL"
                  defaultValue={editingGame ? editingGame.imageSrc : ''}
                  onChange={(e) => handleFieldChange('imageSrc', e.target.value)}
                />
                {formErrors.imageSrc && <p className="error">{formErrors.imageSrc}</p>}
                <input
                  type="text"
                  className="game-ins"
                  placeholder="Game Publisher Name"
                  defaultValue={editingGame ? editingGame.publisher : ''}
                  onChange={(e) => handleFieldChange('publisher', e.target.value)}
                />
                {formErrors.publisher && <p className="error">{formErrors.publisher}</p>}
                <button className="submit-game" onClick={() => addOrUpdateGame({
                  title: document.querySelector('.game-title').value,
                  description: document.querySelector('.game-desc').value,
                  imageSrc: document.querySelector('.game-url').value,
                  publisher: document.querySelector('.game-ins').value,
                })}>
                  {editingGame ? 'UPDATE' : 'ADD'}
                </button>
                <button className="cancel-btn" onClick={() => togglePopup()}>Cancel</button>
              </div>
            )}
          </>
        )}
      </div>
      <div className="game-list">
        {gameData.map((game) => (
          <div className="game-item" key={game.id}>
            <img src={game.imageSrc} alt={game.title} className="game-image" />
            <h4 className="game-title">{game.title}</h4>
            <p className="game-description">{game.description}</p>
            <p className="game-publisher">Publisher: {game.publisher}</p>
            {userType === 'admin' && (
              <>
                <button className="edit" onClick={() => togglePopup(game)}>
                  EDIT
                </button>
                <button className="delete-btn" onClick={() => deleteGame(game.id)}>
                  DELETE
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
