import React, { useState, useEffect } from 'react';
import './Grading.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import { CSVLink } from 'react-csv';

const players = [
  {
    id: 1,
    name: 'Player 1',
    department: 'Computer Science',
    year: 'Senior',
    games: ['Game A', 'Game B', 'Game C'],
    grades: [
      { gameId: 1, gameName: 'Game A', cia1: '', cia2: '', theory: '', grade: '' },
      { gameId: 2, gameName: 'Game B', cia1: '', cia2: '', theory: '', grade: '' },
      { gameId: 3, gameName: 'Game C', cia1: '', cia2: '', theory: '', grade: '' },
    ],
  },
  {
    id: 2,
    name: 'Player 2',
    department: 'Electrical Engineering',
    year: 'Junior',
    games: ['Game X', 'Game Y'],
    grades: [
      { gameId: 4, gameName: 'Game X', cia1: '', cia2: '', theory: '', grade: '' },
      { gameId: 5, gameName: 'Game Y', cia1: '', cia2: '', theory: '', grade: '' },
    ],
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

function Grading() {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [selectedGames, setSelectedGames] = useState([]);
  const [gradingGame, setGradingGame] = useState(null);
  const [grades, setGrades] = useState({ cia1: '', cia2: '', theory: '' });
  const [playerId, setPlayerId] = useState('');
  const [playerData, setPlayerData] = useState(null);
  const [playerDetails, setPlayerDetails] = useState([...players]);
  const [selectedPlayerDetails, setSelectedPlayerDetails] = useState(null);

  useEffect(() => {
   
    calculateGrades();
  }, [playerDetails]);

  useEffect(() => {

    const selected = playerDetails.find((player) => player.id === Number(selectedPlayer));
    setSelectedPlayerDetails(selected);
  }, [selectedPlayer, playerDetails]);

  const calculateGrades = () => {
    const updatedPlayerDetails = playerDetails.map((player) => {
      return {
        ...player,
        grades: player.grades.map((gradeInfo) => {
          const cia1 = parseFloat(gradeInfo.cia1);
          const cia2 = parseFloat(gradeInfo.cia2);
          const theory = parseFloat(gradeInfo.theory);

          if (!isNaN(cia1) && !isNaN(cia2) && !isNaN(theory)) {
            const totalMarks = cia1 + cia2 + theory;
            let grade = '';

            if (totalMarks >= 90) {
              grade = 'A+';
            } else if (totalMarks >= 80) {
              grade = 'A';
            } else if (totalMarks >= 70) {
              grade = 'B';
            } else if (totalMarks >= 60) {
              grade = 'C';
            } else if (totalMarks >= 50) {
              grade = 'D';
            } else {
              grade = 'F';
            }

            return { ...gradeInfo, grade };
          }

          return gradeInfo;
        }),
      };
    });

    setPlayerDetails(updatedPlayerDetails);
  };

  const handlePlayerChange = (e) => {
    const playerId = e.target.value;
    setSelectedPlayer(playerId);
    const selectedPlayer = players.find((player) => player.id === Number(playerId));
    setSelectedGames(selectedPlayer ? selectedPlayer.games : []);
  };

  const handleGameGrade = (game) => {
    setGradingGame(game);
    setGrades({ cia1: '', cia2: '', theory: '' });
  };

  const handleSubmitGrade = () => {
    const updatedPlayerDetails = playerDetails.map((player) => {
      if (player.id === Number(selectedPlayer)) {
        return {
          ...player,
          grades: player.grades.map((gradeInfo) => {
            if (gradeInfo.gameName === gradingGame) {
              return { ...gradeInfo, ...grades };
            }
            return gradeInfo;
          }),
        };
      }
      return player;
    });

    setPlayerDetails(updatedPlayerDetails);

    setGradingGame(null);
    setGrades({ cia1: '', cia2: '', theory: '' });
  };

  const handlePlayerIdChange = (e) => {
    setPlayerId(e.target.value);
  };

  const handleFetchPlayerData = () => {
    const player = playerDetails.find((player) => player.id === Number(playerId));
    if (player) {
      setPlayerData(player.grades);
    }
  };

  const handleEditGrade = (playerId, gameId, newGrade) => {
    const updatedPlayerDetails = playerDetails.map((player) => {
      if (player.id === playerId) {
        const updatedGrades = player.grades.map((gradeInfo) => {
          if (gradeInfo.gameId === gameId) {
            return { ...gradeInfo, ...grades };
          }
          return gradeInfo;
        });
        return { ...player, grades: updatedGrades };
      }
      return player;
    });
    setPlayerDetails(updatedPlayerDetails);
  };

  return (
    <div className="game-grading">
      <h2>Game Grading</h2>

      <div className="player-select">
        <label>Select Player:</label>
        <select onChange={handlePlayerChange} value={selectedPlayer}>
          <option value="">-- Select Player --</option>
          {players.map((player) => (
            <option key={player.id} value={player.id}>
              {player.name}
            </option>
          ))}
        </select>
      </div>
      {selectedPlayerDetails && (
        <div className="player-details">
          <h2>Player Details</h2>
          <p>
            <strong>Player ID:</strong> {selectedPlayerDetails.id}
          </p>
          <p>
            <strong>Player Name:</strong> {selectedPlayerDetails.name}
          </p>
          <p>
            <strong>Department:</strong> {selectedPlayerDetails.department}
          </p>
          <p>
            <strong>Year:</strong> {selectedPlayerDetails.year}
          </p>
        </div>
      )}
      <div className="game-list">
        <h3>Selected Games for Grading:</h3>
        <ul>
          {selectedGames.map((game) => (
            <li key={game}>
              {game}{' '}
              <button class="grade-btn" onClick={() => handleGameGrade(game)}>Grade</button>
            </li>
          ))}
        </ul>
      </div>
      {gradingGame && (
        <div className="popup">
          <h3>Grade Game: {gradingGame}</h3>
          <label>CIA 1:</label>
          <input
            type="text"
            value={grades.cia1}
            onChange={(e) => setGrades({ ...grades, cia1: e.target.value })}
          />
          <label>CIA 2:</label>
          <input
            type="text"
            value={grades.cia2}
            onChange={(e) => setGrades({ ...grades, cia2: e.target.value })}
          />
          <label>Theory:</label>
          <input
            type="text"
            value={grades.theory}
            onChange={(e) => setGrades({ ...grades, theory: e.target.value })}
          />
          <button onClick={handleSubmitGrade}>Submit Grade</button>
          <button className="cancel-btn" onClick={() => setGradingGame(null)}>
            Close
          </button>
        </div>
      )}

      <div className="player-details">
        <h2>Player Details</h2>
        <table>
          <thead>
            <tr>
              <th>Player ID</th>
              <th>Player Name</th>
              <th>Game</th>
              <th>CIA 1</th>
              <th>CIA 2</th>
              <th>Theory</th>
              <th>Grade</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedPlayerDetails &&
              selectedPlayerDetails.grades.map((gradeInfo, index) => (
                <tr key={index}>
                  <td>{selectedPlayerDetails.id}</td>
                  <td>{selectedPlayerDetails.name}</td>
                  <td>{gradeInfo.gameName}</td>
                  <td>
                    <input
                      type="text"
                      value={gradeInfo.cia1}
                      onChange={(e) =>
                        handleEditGrade(selectedPlayerDetails.id, gradeInfo.gameId, { ...grades, cia1: e.target.value })
                      }
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={gradeInfo.cia2}
                      onChange={(e) =>
                        handleEditGrade(selectedPlayerDetails.id, gradeInfo.gameId, { ...grades, cia2: e.target.value })
                      }
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={gradeInfo.theory}
                      onChange={(e) =>
                        handleEditGrade(selectedPlayerDetails.id, gradeInfo.gameId, { ...grades, theory: e.target.value })
                      }
                      disabled
                    />
                  </td>
                  <td>{gradeInfo.grade}</td>
                  <td>
                    <button onClick={() => handleEditGrade(selectedPlayerDetails.id, gradeInfo.gameId, '')}>
                      Clear
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="download-button">
        <CSVLink
          data={playerDetails}
          filename={'player_grades.csv'}
          className="btn btn-primary"
          target="_blank"
        >
          Download CSV
        </CSVLink>
      </div>
    </div>
  );
}

export default Grading;
