import React, { useState, useEffect } from 'react';
import './Players.css';
import EnrollmentPopup from './EnrollmentPopup'; // Import the EnrollmentPopup component
import { getGameData } from './GameData';
import axios from 'axios';
import PlayerData from './PlayerData';
import { getToken } from './LocalStorage';
import { useNavigate} from 'react-router-dom';

function Players() {
  const [selectedGender, setSelectedGender] = useState('Male'); 
  const [searchQuery, setSearchQuery] = useState('');
  
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const password="defaultpassword"
  const [newPlayer, setNewPlayer] = useState({
    playerName: '',
      email:'',
      gender:selectedGender,
      contact: '',
      age:'',
  });
  const [imageUrl,setUrl]=useState("")

  const [playersData, setPlayersData] = useState([]);
  const [editPlayerId, setEditPlayerId] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [enrollmentPopupOpen, setEnrollmentPopupOpen] = useState(false);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [games, setGames] = useState(getGameData()); 

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setEditMode(false);
    setFormErrors({});
    setNewPlayer({
      playerName: '',
      email:'',
      gender:selectedGender,
      contact: '',
      age:'',
    });
  };

  const handleFieldChange = (field, value) => {
    setFormErrors({ ...formErrors, [field]: '' });
    setNewPlayer({ ...newPlayer, [field]: value });
  };

  const addPlayer = () => {
    const errors = validateForm(newPlayer);
    if (Object.keys(errors).length === 0) {
      const updatedPlayers = [
        ...playersData,
        {
          ...newPlayer,
           },
      ];
      setPlayersData(updatedPlayers);
      axios.post("http://localhost:8080/players",newPlayer,{
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

  const validateForm = (player) => {
    const errors = {};

    if (!player.playerName.trim()) {
      errors.playerName = 'playerName is required';
    }

    if (!player.contact) {
      errors.contact = 'Player Contact Number is required';
    }
    
    if (!player.age) {
      errors.age = 'Player age is required';
    }
    
    if (!player.email.trim()) {
      errors.email = 'Player Email is required';
    }
    return errors;
  };

  const editPlayer = (playerId) => {
    const playerToEdit = playersData.find((player) => player.playerId === playerId);
    if (playerToEdit) {
      setEditMode(true);
      setEditPlayerId(playerId);
      setNewPlayer({ ...playerToEdit });
      setIsOpen(true);
    }
  };

  const updatePlayer = () => {
    
    const errors = validateForm(newPlayer);
    if (Object.keys(errors).length === 0) {
      axios
        .put(`http://localhost:8080/players/${editPlayerId}`, newPlayer, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response);
          const updatedPlayers = playersData.map((player) =>
            player.id === editPlayerId ? response.data : player
          );
          setPlayersData(updatedPlayers);
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

  const filteredPlayers = playersData.filter((player) => {
    const playerName = player.playerName || '';
    return playerName.toLowerCase().includes(searchQuery.toLowerCase());
  });
  

  const deletePlayer = (playerId) => {
    if (window.confirm('Are you sure you want to delete this player?')) {
      axios
        .delete(`http://localhost:8080/players/${playerId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then(() => {
          const updatedPlayers = playersData.filter((player) => player.id !== playerId);
          setPlayersData(updatedPlayers);
          window.location.reload(false)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    axios.get("http://localhost:8080/players",{
      headers:{
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', 
      }}).then(response=>{
        setPlayersData(response.data)
        console.log(playersData)
        
      }).catch(error=>{
        if(error.response.status===403){
          localStorage.clear();
        alert("Something went Wrong..! Try logging in again")
        nav("/login")
        }
      })
  }, []);
  const handleEnrollmentClick = (playerId) => {
    setSelectedPlayerId(playerId);
    setEnrollmentPopupOpen(true);
  };
  const handleEnroll = (gameId) => {
    const selectedPlayer = playersData.find((player) => player.id === selectedPlayerId);
    if (selectedPlayer) {
      const selectedGame = games.find((game) => game.id === gameId);
      if (selectedGame) {
        if (selectedGame.enrolledPlayers.some((player) => player.id === selectedPlayerId)) {
          alert('Error: Player already exist.');
        } else {
          const updatedGames = games.map((game) => {
            if (game.id === selectedGame.id) {
              return {
                ...game,
                enrolledPlayers: [...game.enrolledPlayers, selectedPlayer],
              };
            }
            return game;
          });
          setGames(updatedGames);
          localStorage.setItem('games', JSON.stringify(updatedGames));
          setEnrollmentPopupOpen(false);
        }
      }
    }
  };
  const nav=useNavigate();
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
    <div className="players-container">
      <div className="header">
        <h1>PLAYER DETAILS</h1>
        <input
          className="search-field"
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="add-player-button" onClick={togglePopup}>
          Add Player
        </button>
      </div>
      {filteredPlayers.map((player) => (
        <div className="player-box" key={player.id}>
          <div className="player-image">
            
            <img src={player.gender==="Male"
              ? 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png'
              : 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png'
       } alt={player.playerName} />
          </div>
          <div className="player-details">
            <div className="player-info">
              <p className="player-name">{player.playerName}</p>
              <p className="player-id">ID: {player.playerId}</p>
            </div>
            <div className="detail-box">
              
              <div className="detail">
                <strong>Email:</strong> {player.email}
              </div>
              
              <div className="detail">
                <strong>Contact:</strong> {player.contact}
              </div>
              
              
              <div className="button-container">
                <button className="player-button edit" onClick={() => editPlayer(player.playerId)}>
                  Edit
                </button>
                <button className="player-button delete" onClick={() => deletePlayer(player.playerId)}>
                  Delete
                </button>
                
              </div>
            </div>
          </div>
        </div>
      ))}
      {isOpen && (
        <div className="popup">
          <h3>{editMode ? 'EDIT PLAYER' : 'ADD A PLAYER'}</h3>
          <input
            type="text"
            className="player-name"
            placeholder="Player Name"
            value={newPlayer.playerName}
            onChange={(e) => handleFieldChange('playerName', e.target.value)}
          />
          {formErrors.playerName && <p className="error">{formErrors.playerName}</p>}
          <input
            type="text"
            className="player-name"
            placeholder="Player Email"
            value={newPlayer.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
          {/* <input
            type="text"
            className="player-id"
            placeholder="Player ID"
            value={newPlayer.playerId}
            onChange={(e) => handleFieldChange('playerId', e.target.value)}
          />
          {formErrors.playerId && <p className="error">{formErrors.playerId}</p>} */}
          <div class="gender-div">
          Gender : &nbsp;<select
            className="player-gender"
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
            </div>
        
          
          <input
            type="text"
            className="player-contactnum"
            placeholder="Contact Number"
            value={newPlayer.contact}
            onChange={(e) => handleFieldChange('contact', e.target.value)}
          />
          {formErrors.contact && <p className="error">{formErrors.contact}</p>}

          
          <input
            type="number"
            className="player-age"
            placeholder="Age"
            value={newPlayer.age}
            onChange={(e) => handleFieldChange('age', e.target.value)}
          />
          {formErrors.age && <p className="error">{formErrors.age}</p>}
          
         

          {editMode ? (
            <button className="submit-player" onClick={updatePlayer}>
              UPDATE
            </button>
          ) : (
            <button className="submit-player" onClick={addPlayer}>
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
          selectedPlayerId={selectedPlayerId}
          onClose={() => setEnrollmentPopupOpen(false)}
          setEnrollmentPopupOpen={setEnrollmentPopupOpen}
        />
      )}
    </div>
  );
}

export default Players;