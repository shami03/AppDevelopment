import React, { useState, useEffect } from 'react';
import './PublisherDashboard.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useSelector } from 'react-redux';
import { getGameData } from './GameData';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector, Tooltip as RechartsTooltip } from 'recharts';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function PublisherDashboard() {
  const username = useSelector((state) => state.user.user);
  const userType = useSelector((state) => state.user.userType);
  const [games, setGames] = useState([
    {
        id: 1,
        name: "John Doe",
        department: "Computer Science",
        year: "Junior",
        attendance: 85,
        profileImage: "https://example.com/john-doe-profile.jpg",
        enrolledGames: [
          {
            gameId: 101,
            gameName: "Introduction to Programming",
            publisher: "Prof. Smith",
            grade: "A",
          },
          {
            gameId: 102,
            gameName: "Web Development Fundamentals",
            publisher: "Dr. Johnson",
            grade: "A-",
          },
        ],
      },
      {
        id: 2,
        name: "Jane Smith",
        department: "Electrical Engineering",
        year: "Sophomore",
        attendance: 92,
        profileImage: "https://example.com/jane-smith-profile.jpg",
        enrolledGames: [
          {
            gameId: 103,
            gameName: "Digital Circuits",
            publisher: "Prof. Davis",
            grade: "B+",
          },
        ],
      },
      {
        id: 3,
        name: "Michael Johnson",
        department: "Mechanical Engineering",
        year: "Senior",
        attendance: 78,
        profileImage: "https://example.com/michael-johnson-profile.jpg",
        enrolledGames: [
          {
            gameId: 104,
            gameName: "Thermodynamics",
            publisher: "Dr. Wilson",
            grade: "A",
          },
          {
            gameId: 105,
            gameName: "Mechanical Design",
            publisher: "Prof. Brown",
            grade: "A-",
          },
        ],
      },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
const playerData=useState([]);
const [gamesr, setGamesr] = useState([
  {
    id: 1,
    title: 'Game 1',
    players: 30,
    stars5: 5,
    stars4: 8,
    stars3: 7,
  },
  {
    id: 2,
    title: 'Game 2',
    players: 25,
    stars5: 8,
    stars4: 6,
    stars3: 5,
  },
]);
useEffect(() => {
  const gameData = getGameData();
  setGames(gameData);
}, []);

  const tableData = gamesr.map((game) => ({
    name: game.title,
    players: game.players,
    stars5: game.stars5,
    stars4: game.stars4,
    stars3: game.stars3,
  }));

  const pieChartData = [
    { name: '5 Stars', value: tableData.reduce((total, game) => total + game.stars5, 0) },
    { name: '4 Stars', value: tableData.reduce((total, game) => total + game.stars4, 0) },
    { name: '3 Stars', value: tableData.reduce((total, game) => total + game.stars3, 0) },
  ];

  const barChartData = tableData.map((game) => ({
    name: game.name,
    players: game.players,
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={-10} textAnchor={textAnchor} fill="#333">
          {`Players: ${payload.value}`}
        </text>
      </g>
    );
  };

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div id="publisher-dashboard">
      <div className="overview">
        <h2>Overview</h2>
      </div>

      <div className="overview-container">
        <div className="overview-item">
          <img
            className="player-image"
            src="https://clipart-library.com/images_k/graduate-silhouette-vector/graduate-silhouette-vector-21.png"
            alt="Certifications Received"
          />
          <h5>Certifications Taught</h5>
          <h6>{tableData.length}</h6>
        </div>

        <div className="overview-item">
          <img
            className="player-image"
            src="https://www.pngarts.com/files/7/School-Education-Game-PNG-Photo.png"
            alt="Total Games Taught"
          />
          <h5>Total Games Taught</h5>
          <h6>{tableData.length}</h6>
        </div>

        <div className="overview-item">
          <img
            className="player-image"
            src="https://cdn-icons-png.flaticon.com/512/8999/8999099.png"
            alt="Average Rating"
          />
          <h5>Average Rating</h5>
          <h6>
            
              6
          </h6>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="games-section">
          <h2>Ongoing Games</h2>
          <table className="games-table">
            <thead>
              <tr>
                <th>GAME TITLE</th>
                <th>STATUS</th>
                <th>VIEW</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => (
                <tr key={game.id}>
                  <td>{game.title}</td>
                  <td>Ongoing</td>
                  <td>
                    <VisibilityIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="performance-section">
          <h2>Game Enrollment</h2>
          <BarChart width={400} height={200} data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="players" fill="#8884d8" />
          </BarChart>

          <div style={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Game Ratings
            </Typography>
            <ResponsiveContainer width={400} height={200}>
              <PieChart width={400} height={200}>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  onMouseEnter={onPieEnter}
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
</div>

    </div>
  );
}

export default PublisherDashboard;
