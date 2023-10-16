import React, { useState, useEffect } from 'react';
import './Games.css';
import EnrollmentPopup from './EnrollmentPopup'; // Import the EnrollmentPopup component
import { getGameData } from './GameData';
import axios from 'axios';
import GameData from './GameData';
import { getToken } from './LocalStorage';
import { useNavigate } from 'react-router-dom';

function Games() {
  const [selectedGender, setSelectedGender] = useState('Male'); 
  const [searchQuery, setSearchQuery] = useState('');
  const nav=useNavigate();
  
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const password="defaultpassword"
  const [newGame, setNewGame] = useState({
    title: '',
      publisher:'',
      genre: '',
      
  });
  const [imageUrl,setUrl]=useState("")

  const [gamesData, setGamesData] = useState([]);
  const [editGameId, setEditGameId] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [enrollmentPopupOpen, setEnrollmentPopupOpen] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [games, setGames] = useState(getGameData()); 

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setEditMode(false);
    setFormErrors({});
    setNewGame({
      title: '',
      publisher:'',
      genre: '',
      
    });
  };

  const handleFieldChange = (field, value) => {
    setFormErrors({ ...formErrors, [field]: '' });
    setNewGame({ ...newGame, [field]: value });
  };

  const addGame = () => {
    const errors = validateForm(newGame);
    if (Object.keys(errors).length === 0) {
      const updatedGames = [
        ...gamesData,
        {
          ...newGame,
           },
      ];
      setGamesData(updatedGames);
      axios.post("http://localhost:8080/Game",newGame,{
        headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', 
        }
      }).then((response)=>{console.log(response)}).catch((error)=>{if(error.response.status===403){
        localStorage.clear();
        alert("Something went Wrong..! Try logging in again")
        nav("/login")
      }})
      setIsOpen(false);
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (game) => {
    const errors = {};

    if (!game.title.trim()) {
      errors.title = 'title is required';
    }

    if (!game.genre) {
      errors.genre = 'Game Genre Number is required';
    }
    
    
    
    if (!game.publisher.trim()) {
      errors.publisher = 'Game Publisher is required';
    }
    return errors;
  };

  const editGame = (gameId) => {
    const gameToEdit = gamesData.find((game) => game.gameId === gameId);
    if (gameToEdit) {
      setEditMode(true);
      setEditGameId(gameId);
      setNewGame({ ...gameToEdit });
      setIsOpen(true);
    }
  };

  const updateGame = () => {
    
    const errors = validateForm(newGame);
    if (Object.keys(errors).length === 0) {
      axios
        .put(`http://localhost:8080/Game/${editGameId}`, newGame, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response);
          const updatedGames = gamesData.map((game) =>
            game.id === editGameId ? response.data : game
          );
          setGamesData(updatedGames);
          window.location.reload(false)

        })
        .catch((error) => {
          console.log(error);
        });
      setIsOpen(false);
      setEditMode(false);
    } else {
      setFormErrors(errors);
    }
  };

  const filteredGames = gamesData.filter((game) => {
    const title = game.title || '';
    return title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  

  const deleteGame = (gameId) => {
    if (window.confirm('Are you sure you want to delete this game?')) {
      axios
        .delete(`http://localhost:8080/Game/${gameId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then(() => {
          const updatedGames = gamesData.filter((game) => game.id !== gameId);
          setGamesData(updatedGames);
          window.location.reload(false)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    axios.get("http://localhost:8080/Game",{
      headers:{
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', 
      }}).then(response=>{
        setGamesData(response.data)
        console.log(gamesData)
        
      }).catch(error=>{
        if(error.response.status===403){
          localStorage.clear();
        alert("Something went Wrong..! Try logging in again")
        nav("/login")
        }
      })
  }, []);
  const handleEnrollmentClick = (gameId) => {
    setSelectedGameId(gameId);
    setEnrollmentPopupOpen(true);
  };
  const handleEnroll = (gameId) => {
    const selectedGame = gamesData.find((game) => game.id === selectedGameId);
    if (selectedGame) {
      const selectedGame = games.find((game) => game.id === gameId);
      if (selectedGame) {
        if (selectedGame.enrolledGames.some((game) => game.id === selectedGameId)) {
          alert('Error: Game already exist.');
        } else {
          const updatedGames = games.map((game) => {
            if (game.id === selectedGame.id) {
              return {
                ...game,
                enrolledGames: [...game.enrolledGames, selectedGame],
              };
            }
            return game;
          });
          setGames(updatedGames);
          localStorage.setItem('Game', JSON.stringify(updatedGames));
          setEnrollmentPopupOpen(false);
        }
      }
    }
  };
  
  const token=localStorage.getItem("jwtToken")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
},[]);
  return (
    <div className="games-container">
      <div className="header">
        <h1>GAME DETAILS</h1>
        <input
          className="search-field"
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="add-game-button" onClick={togglePopup}>
          Add Game
        </button>
      </div>
      {filteredGames.map((game) => (
        <div className="game-box" key={game.id}>
          
          <div className="game-details">
            <div className="game-info">
              <p className="game-name">{game.title}</p>
              <p className="game-id">ID: {game.gameId}</p>
            </div>
            <div className="detail-box">
              
              <div className="detail">
                <strong>Publisher:</strong> {game.publisher}
              </div>
              
              <div className="detail">
                <strong>Genre:</strong> {game.genre}
              </div>
              
              
              <div className="button-container">
                <button className="game-button edit" onClick={() => editGame(game.gameId)}>
                  Edit
                </button>
                <button className="game-button delete" onClick={() => deleteGame(game.gameId)}>
                  Delete
                </button>
                
              </div>
            </div>
          </div>
        </div>
      ))}
      {isOpen && (
        <div className="popup">
          <h3>{editMode ? 'EDIT GAME' : 'ADD A GAME'}</h3>
          <input
            type="text"
            className="game-name"
            placeholder="Game Name"
            value={newGame.title}
            onChange={(e) => handleFieldChange('title', e.target.value)}
          />
          {formErrors.title && <p className="error">{formErrors.title}</p>}
          <input
            type="text"
            className="game-name"
            placeholder="Game Publisher"
            value={newGame.publisher}
            onChange={(e) => handleFieldChange('publisher', e.target.value)}
          />
          {formErrors.publisher && <p className="error">{formErrors.publisher}</p>}
          {/* <input
            type="text"
            className="game-id"
            placeholder="Game ID"
            value={newGame.gameId}
            onChange={(e) => handleFieldChange('gameId', e.target.value)}
          />
          {formErrors.gameId && <p className="error">{formErrors.gameId}</p>} */}
          
          
          <input
            type="text"
            className="game-genrenum"
            placeholder="Genre"
            value={newGame.genre}
            onChange={(e) => handleFieldChange('genre', e.target.value)}
          />
          {formErrors.genre && <p className="error">{formErrors.genre}</p>}

          
          
          
          
         

          {editMode ? (
            <button className="submit-game" onClick={updateGame}>
              UPDATE
            </button>
          ) : (
            <button className="submit-game" onClick={addGame}>
              ADD
            </button>
          )}
          <button className="cancel-btn" onClick={togglePopup}>
            Cancel
          </button>
        </div>
      )}
      {enrollmentPopupOpen && (
        <EnrollmentPopup 
          games={games}
          onEnroll={handleEnroll}
          selectedGameId={selectedGameId}
          onClose={() => setEnrollmentPopupOpen(false)}
          setEnrollmentPopupOpen={setEnrollmentPopupOpen}
        />
      )}
    </div>
  );
}

export default Games;