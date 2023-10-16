import React, { useState, useEffect } from 'react';
import './PublisherDashboard.css'; 
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function PlayerHomepage() {
  const username = useSelector((state) => state.user.user);
  const userType = useSelector((state) => state.user.userType);
  const [games, setGames] = useState([

    {
      id: 1,
      title: "Introduction to Programming",
      publisher: "Prof. Smith",
      grade: "A",
      attendance: 85,
    },
    {
      id: 2,
      title: "Web Development Fundamentals",
      publisher: "Dr. Johnson",
      grade: "A-",
      attendance: 92,
    },

  ]);

  useEffect(() => {
   
  }, []);

  const barChartData = games.map((game) => ({
    title: game.title,
    attendance: game.attendance,
    grade: game.grade,
  }));

  return (
    <div id="player-homepage">
      <div className="overview">
        <h2>Welcome, {username}!</h2>
        <p>Your Player Dashboard</p>
      </div>

      <div className="dashboard-section">
        <div className="games-section">
          <h2>Enrolled Games</h2>
          <table className="games-table">
            <thead>
              <tr>
                <th>GAME TITLE</th>
                <th>Publisher</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => (
                <tr key={game.id}>
                  <td>{game.title}</td>
                  <td>{game.publisher}</td>
                  <td>{game.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="attendance-chart">
          <h2>Attendance Chart</h2>
          <BarChart width={400} height={200} data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="attendance" fill="#8884d8" name="Attendance" />
          </BarChart>
        </div>

        <div className="grade-chart">
          <h2>Grade Chart</h2>
          <BarChart width={400} height={200} data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="grade" fill="#82ca9d" name="Grade" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default PlayerHomepage;
