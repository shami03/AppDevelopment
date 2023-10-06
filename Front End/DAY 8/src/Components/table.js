<<<<<<< HEAD
import React from 'react';
import './table.css';
import Dashboard from './Dashboard'
import { Link } from 'react-router-dom';

const PlayerDetailsTable = () => {


    const playerDetails = [
        {
            firstName: 'John',
            lastName: 'Doe',
            email: 'sfb@fsb.com',
            password: '*********',
            playHours: 50,
            lastLogin: '2023-09-25 10:30 AM',
        },
        {
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'janesmith@example.com',
            password: '*********',
            playHours: 35,
            lastLogin: '2023-09-24 3:45 PM',
        },
        {
            firstName: 'Alice',
            lastName: 'Johnson',
            email: 'alice@example.com',
            password: '*********',
            playHours: 72,
            lastLogin: '2023-09-23 8:15 AM',
        },
        {
            firstName: 'Bob',
            lastName: 'Brown',
            email: 'bobbrown@example.com',
            password: '*********',
            playHours: 28,
            lastLogin: '2023-09-22 2:10 PM',
        },
        {
            firstName: 'Eva',
            lastName: 'Garcia',
            email: 'eva@example.com',
            password: '*********',
            playHours: 63,
            lastLogin: '2023-09-21 11:55 AM',
        },
        {
            firstName: 'David',
            lastName: 'Lee',
            email: 'davidlee@example.com',
            password: '*********',
            playHours: 41,
            lastLogin: '2023-09-20 6:20 PM',
        },
        {
            firstName: 'Emily',
            lastName: 'Miller',
            email: 'emily@example.com',
            password: '*********',
            playHours: 54,
            lastLogin: '2023-09-19 9:45 AM',
        },
        {
            firstName: 'Michael',
            lastName: 'Wilson',
            email: 'michael@example.com',
            password: '*********',
            playHours: 37,
            lastLogin: '2023-09-18 4:30 PM',
        },
        {
            firstName: 'Olivia',
            lastName: 'Anderson',
            email: 'olivia@example.com',
            password: '*********',
            playHours: 60,
            lastLogin: '2023-09-17 7:20 AM',
        },
        {
            firstName: 'William',
            lastName: 'Martin',
            email: 'william@example.com',
            password: '*********',
            playHours: 45,
            lastLogin: '2023-09-16 1:05 PM',
        },
    ];
    

    return (
        <div>
        <br></br>
        <br></br>
        <h1>Game Hub</h1>
        <div className="player-details-container">
            <h2>Player Details</h2>
            <table className="player-details-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                        <th>Password</th>
                        <th>Play Hours</th>
                        <th>Last Login</th>
                    </tr>
                </thead>
                <tbody>
                    {playerDetails.map((player, index) => (
                        <tr key={index}>
                            <td>{player.firstName}</td>
                            <td>{player.lastName}</td>
                            <td>{player.email}</td>
                            <td>{player.password}</td>
                            <td>{player.playHours}</td>
                            <td>{player.lastLogin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='butn'>
            <Link to="/home">

            Back
            </Link>
            </button>
        </div>
        </div>
    );
};

export default PlayerDetailsTable;
=======
import React from 'react';
import './table.css';
import Dashboard from './Dashboard'
import { Link } from 'react-router-dom';

const PlayerDetailsTable = () => {


    const playerDetails = [
        {
            firstName: 'John',
            lastName: 'Doe',
            email: 'sfb@fsb.com',
            password: '*********',
            playHours: 50,
            lastLogin: '2023-09-25 10:30 AM',
        },
        {
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'janesmith@example.com',
            password: '*********',
            playHours: 35,
            lastLogin: '2023-09-24 3:45 PM',
        },
        {
            firstName: 'Alice',
            lastName: 'Johnson',
            email: 'alice@example.com',
            password: '*********',
            playHours: 72,
            lastLogin: '2023-09-23 8:15 AM',
        },
        {
            firstName: 'Bob',
            lastName: 'Brown',
            email: 'bobbrown@example.com',
            password: '*********',
            playHours: 28,
            lastLogin: '2023-09-22 2:10 PM',
        },
        {
            firstName: 'Eva',
            lastName: 'Garcia',
            email: 'eva@example.com',
            password: '*********',
            playHours: 63,
            lastLogin: '2023-09-21 11:55 AM',
        },
        {
            firstName: 'David',
            lastName: 'Lee',
            email: 'davidlee@example.com',
            password: '*********',
            playHours: 41,
            lastLogin: '2023-09-20 6:20 PM',
        },
        {
            firstName: 'Emily',
            lastName: 'Miller',
            email: 'emily@example.com',
            password: '*********',
            playHours: 54,
            lastLogin: '2023-09-19 9:45 AM',
        },
        {
            firstName: 'Michael',
            lastName: 'Wilson',
            email: 'michael@example.com',
            password: '*********',
            playHours: 37,
            lastLogin: '2023-09-18 4:30 PM',
        },
        {
            firstName: 'Olivia',
            lastName: 'Anderson',
            email: 'olivia@example.com',
            password: '*********',
            playHours: 60,
            lastLogin: '2023-09-17 7:20 AM',
        },
        {
            firstName: 'William',
            lastName: 'Martin',
            email: 'william@example.com',
            password: '*********',
            playHours: 45,
            lastLogin: '2023-09-16 1:05 PM',
        },
    ];
    

    return (
        <div>
        <br></br>
        <br></br>
        <h1>Game Hub</h1>
        <div className="player-details-container">
            <h2>Player Details</h2>
            <table className="player-details-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                        <th>Password</th>
                        <th>Play Hours</th>
                        <th>Last Login</th>
                    </tr>
                </thead>
                <tbody>
                    {playerDetails.map((player, index) => (
                        <tr key={index}>
                            <td>{player.firstName}</td>
                            <td>{player.lastName}</td>
                            <td>{player.email}</td>
                            <td>{player.password}</td>
                            <td>{player.playHours}</td>
                            <td>{player.lastLogin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='butn'>
            <Link to="/home">

            Back
            </Link>
            </button>
        </div>
        </div>
    );
};

export default PlayerDetailsTable;
>>>>>>> origin/main
