import React, { useState } from 'react';
import './Attendence.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function Attendance() {
  const [games] = useState([
    { id: 1, title: 'Game A' },
    { id: 2, title: 'Game B' },
  ]);

  const [players] = useState([
    { id: 101, name: 'Player 1', department: 'Computer Science', year: 'II' },
    { id: 102, name: 'Player 2', department: 'Electrical Engineering', year: 'III' },
    { id: 103, name: 'Player 3', department: 'Mechanical Engineering', year: 'IV' },
  ]);

  const [selectedGame, setSelectedGame] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendance, setAttendance] = useState({});
  const [attendanceData, setAttendanceData] = useState([
    { name: 'Present', value: 0 },
    { name: 'Absent', value: 0 },
  ]);

  const getDayWiseAttendanceReport = (gameId, date) => {
    const report = {};
    players.forEach((player) => {
      report[player.id] = Math.random() >= 0.5;
    });
    return report;
  };

  const calculateAttendanceStatistics = () => {
    const presentCount = Object.values(attendance).filter((value) => value === true).length;
    const absentCount = Object.values(attendance).filter((value) => value === false).length;
    setAttendanceData([
      { name: 'Present', value: presentCount },
      { name: 'Absent', value: absentCount },
    ]);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date.toISOString().split('T')[0];
    const dayWiseAttendance = getDayWiseAttendanceReport(selectedGame, formattedDate);
    setAttendance(dayWiseAttendance);
    calculateAttendanceStatistics();
  };

  return (
    <div className="attendance">
      <Typography variant="h5">Attendance Report</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="gameSelect">Select a Game</InputLabel>
            <Select
              id="gameSelect"
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
            >
              <MenuItem value="">Select a game</MenuItem>
              {games.map((game) => (
                <MenuItem key={game.id} value={game.id}>
                  {game.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="calendar-container">
            <Typography>Select a Date:</Typography>
            <DatePicker selected={selectedDate} onChange={handleDateChange} />
          </div>
        </Grid>
      </Grid>

      {selectedGame && (
        <div className="attendance-report">
          <Typography variant="h6">
            Attendance Report for {games.find((game) => game.id === parseInt(selectedGame)).title}
          </Typography>
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Department</th>
                <th>Year</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id}>
                  <td>{player.name}</td>
                  <td>{player.department}</td>
                  <td>{player.year}</td>
                  <td>{attendance[player.id] ? 'Present' : 'Absent'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className="attendance-statistics">
            <Typography variant="h6">Attendance Statistics</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={attendanceData}
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#FF8042"
                >
                  {attendanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.name === 'Present' ? '#0088FE' : '#FF8042'} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="attendance-summary">
            <Typography variant="h6">Attendance Summary</Typography>
            <Typography>Total Present: {attendanceData.find((entry) => entry.name === 'Present').value}</Typography>
            <Typography>Total Absent: {attendanceData.find((entry) => entry.name === 'Absent').value}</Typography>
          </div>
        </Grid>
      </Grid>

      <div className="print-button">
        <Button variant="contained" color="primary" onClick={() => window.print()}>
          Print Report
        </Button>
      </div>
    </div>
  );
}

export default Attendance;
