import React, { useState, useEffect } from 'react';
import './Admin.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as LineChartTooltip,
  Legend as LineChartLegend,
} from 'recharts';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const pieChartData = [
    { name: 'Adventure', value: 30 },
    { name: 'Action', value: 25 },
    { name: 'Strategy', value: 20 },
  ];
  const lineChartData = [
    { name: 'January', value: 500 },
    { name: 'February', value: 750 },
    { name: 'March', value: 650 },
    { name: 'April', value: 850 },
    { name: 'May', value: 600 },
    { name: 'June', value: 800 },
  ];

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const storedPlayers = JSON.parse(localStorage.getItem('playersData')) || [];
    setPlayers(storedPlayers);
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const publishers = [
    { id: 1, name: 'Game Co.', department: 'Adventure Games' },
    { id: 2, name: 'GamerTech', department: 'Action Games' },
  ];

  return (
    <div id="main">
      <div class="over">
        <div id="det">
          <h2>OVERVIEW</h2>
        </div>
        <div id="overview">
          <Link to="/players">
            <div className="one">
              <img
                id="player-image"
                src="https://clipart-library.com/images_k/graduate-silhouette-vector/graduate-silhouette-vector-21.png"
              />
              <h5>Total number of Gamers</h5>
              <h6>1000</h6>
            </div>
          </Link>
          <Link to="/games">
            <div className="one">
              <img
                id="player-image"
                src="https://www.pngarts.com/files/7/School-Education-Game-PNG-Photo.png"
              />
              <h5>Total Games Available</h5>
              <h6>50</h6>
            </div>
          </Link>
          <div className="one">
            <img
              id="player-image"
              src="https://w7.pngwing.com/pngs/879/904/png-transparent-subject-international-english-computer-icons-symbol-english-miscellaneous-blue-english-thumbnail.png"
            />
            <h5>Genres Covered</h5>
            <h6>15</h6>
          </div>
          <Link to="/publishers">
            <div className="one">
              <img
                id="player-image"
                src="https://p7.hiclipart.com/preview/396/474/550/teacher-education-school-classroom-computer-icons-teacher.jpg"
              />
              <h5>Total number of Publishers</h5>
              <h6>20</h6>
            </div>
          </Link>
        </div>
      </div>

      <div id="div2"></div>
      <div class="heads">
        <h2 class="head1">Gamers List</h2>
      </div>
      <div class="row1">
        <div id="players-list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Favorite Genre</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id}>
                  <td>{player.id}</td>
                  <td>{player.name}</td>
                  <td>{player.favoriteGenre}</td>
                  <td>{player.contactnum}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pie-chart">
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;GENRE DISTRIBUTION
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <h2 id="det another">GAMERS ENROLLMENT AND GENRE OVERVIEW</h2>
      <div class="row2">
        <div className="line">
          <LineChart width={500} height={300} data={lineChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <LineChartTooltip />
            <LineChartLegend />
          </LineChart>
        </div>
        <h2 id="insa" class="fac-head">Publishers List</h2>
        <br />
        <div id="faculties-list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              {publishers.map((publisher) => (
                <tr key={publisher.id}>
                  <td>{publisher.id}</td>
                  <td>{publisher.name}</td>
                  <td>{publisher.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
