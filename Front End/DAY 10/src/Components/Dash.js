<<<<<<< HEAD
import React from 'react';
import { styled } from '@mui/system';
import { BarChart as MuiBarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Layout from './Layout';
import './Dash.css';
import { Link } from 'react-router-dom';

// New data sets related to game analytics
const gameAnalyticsData = [
  { name: 'Level 1', players: 120, score: 300 },
  { name: 'Level 2', players: 85, score: 450 },
  { name: 'Level 3', players: 150, score: 600 },
  { name: 'Level 4', players: 110, score: 520 },
  // Add more data points as needed
];

const playerAnalyticsData = [
  { name: 'Player 1', experience: 500, level: 10 },
  { name: 'Player 2', experience: 300, level: 8 },
  { name: 'Player 3', experience: 700, level: 15 },
  { name: 'Player 4', experience: 400, level: 9 },
  // Add more player data as needed
];

const BarChart = styled(MuiBarChart)`
  margin: 0 auto;
`;

export default function CustomBarChart() {
  return (
    <>
      <Layout />
      <div className='mass'>
        <h1>Game Analytics - Scores</h1>
        <ResponsiveContainer width="50%" height={200}>
          <BarChart data={gameAnalyticsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="players" fill="#8884d8" name="Players" />
            <Bar dataKey="score" fill="#82ca9d" name="Scores" />
          </BarChart>
        </ResponsiveContainer>
        <h1>Player Analytics - Experience</h1>
        <ResponsiveContainer width="50%" height={200}>
          <BarChart data={playerAnalyticsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="experience" fill="#8884d8" name="Experience" />
            <Bar dataKey="level" fill="#82ca9d" name="Level" />
          </BarChart>
        </ResponsiveContainer>
      </div>
     </>
  );
=======
import React from 'react';
import { styled } from '@mui/system';
import { BarChart as MuiBarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Layout from './Layout';
import './Dash.css';
import { Link } from 'react-router-dom';

// New data sets related to game analytics
const gameAnalyticsData = [
  { name: 'Level 1', players: 120, score: 300 },
  { name: 'Level 2', players: 85, score: 450 },
  { name: 'Level 3', players: 150, score: 600 },
  { name: 'Level 4', players: 110, score: 520 },
  // Add more data points as needed
];

const playerAnalyticsData = [
  { name: 'Player 1', experience: 500, level: 10 },
  { name: 'Player 2', experience: 300, level: 8 },
  { name: 'Player 3', experience: 700, level: 15 },
  { name: 'Player 4', experience: 400, level: 9 },
  // Add more player data as needed
];

const BarChart = styled(MuiBarChart)`
  margin: 0 auto;
`;

export default function CustomBarChart() {
  return (
    <>
      <Layout />
      <div className='mass'>
        <h1>Game Analytics - Scores</h1>
        <ResponsiveContainer width="50%" height={200}>
          <BarChart data={gameAnalyticsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="players" fill="#8884d8" name="Players" />
            <Bar dataKey="score" fill="#82ca9d" name="Scores" />
          </BarChart>
        </ResponsiveContainer>
        <h1>Player Analytics - Experience</h1>
        <ResponsiveContainer width="50%" height={200}>
          <BarChart data={playerAnalyticsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="experience" fill="#8884d8" name="Experience" />
            <Bar dataKey="level" fill="#82ca9d" name="Level" />
          </BarChart>
        </ResponsiveContainer>
      </div>
     </>
  );
>>>>>>> origin/main
}