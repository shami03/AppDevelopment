<<<<<<< HEAD
import React, { useState } from 'react';
import './FAQ.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const faqItems = [
    {
        question: 'How do I play the word game?',
        answer: 'To play the word game, visit our website and click on the "Play Now" button. You can start playing immediately without the need to create an account.'
    },
    {
        question: 'Is the word game free to play?',
        answer: 'Yes, our word game is completely free to play. You can enjoy word puzzles and challenges without any charges.'
    },
    {
        question: 'Can I play the word game on my mobile device?',
        answer: 'Absolutely! Our word game is compatible with both desktop and mobile devices. You can play it on your smartphone or tablet.'
    },
    {
        question: 'Are there different difficulty levels in the word game?',
        answer: 'Yes, we offer various difficulty levels, including easy, medium, and hard. You can choose your preferred level of challenge.'
    },
    {
        question: 'How do I earn points in the word game?',
        answer: 'You earn points by forming words from the given letters. Longer and more complex words earn you higher scores.'
    },
    {
        question: 'Is there a time limit for each word puzzle?',
        answer: 'Yes, each word puzzle has a time limit. You need to solve the puzzle and find as many words as you can within the given time.'
    },
    {
        question: 'Can I compete with other players in real-time?',
        answer: 'Absolutely! We have a multiplayer mode where you can challenge your friends or other players in real-time word battles.'
    },
    {
        question: 'What happens if I can\'t solve a word puzzle?',
        answer: 'If you\'re stuck on a word puzzle, you can use hints or skip to the next puzzle. Hints are available for every puzzle.'
    },
    {
        question: 'Is there a leaderboard to see the top players?',
        answer: 'Yes, we have a leaderboard that displays the top-scoring players. You can see where you rank among the word game community.'
    },
    {
        question: 'How do I report an issue or suggest a new feature?',
        answer: 'You can report any issues or provide suggestions by visiting our "Contact Us" page. We appreciate your feedback!'
    }
];

const FAQ = () => {
    // Initialize state to keep track of which FAQ item is currently expanded
    const [activeItem, setActiveItem] = useState(null);

    // Function to toggle the active FAQ item
    const toggleItem = (index) => {
        if (activeItem === index) {
            // If the clicked item is already active, close it
            setActiveItem(null);
        } else {
            // Otherwise, open the clicked item
            setActiveItem(index);
        }
    };

    return (
        <div>
        <h1>Game Hub</h1>
        <br></br><br></br>
        <div className="faq-container">
            <h2 className='head'>Frequently Asked Questions</h2>
            <ul>
                {faqItems.map((item, index) => (
                    <li key={index}>
                        <button className={`faq-question ${activeItem === index ? 'active' : ''}`} onClick={() => toggleItem(index)}>
                            {item.question}
                        </button>
                        {activeItem === index && <p className="faq-answer">{item.answer}</p>}
                    </li>
                ))}
            </ul>
            <Link to="/home">

            <button className="buttn">
                Back
            </button>
            </Link>
        </div>
        </div>
    );
};

export default FAQ;
=======
import React, { useState } from 'react';
import './FAQ.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const faqItems = [
    {
        question: 'How do I play the word game?',
        answer: 'To play the word game, visit our website and click on the "Play Now" button. You can start playing immediately without the need to create an account.'
    },
    {
        question: 'Is the word game free to play?',
        answer: 'Yes, our word game is completely free to play. You can enjoy word puzzles and challenges without any charges.'
    },
    {
        question: 'Can I play the word game on my mobile device?',
        answer: 'Absolutely! Our word game is compatible with both desktop and mobile devices. You can play it on your smartphone or tablet.'
    },
    {
        question: 'Are there different difficulty levels in the word game?',
        answer: 'Yes, we offer various difficulty levels, including easy, medium, and hard. You can choose your preferred level of challenge.'
    },
    {
        question: 'How do I earn points in the word game?',
        answer: 'You earn points by forming words from the given letters. Longer and more complex words earn you higher scores.'
    },
    {
        question: 'Is there a time limit for each word puzzle?',
        answer: 'Yes, each word puzzle has a time limit. You need to solve the puzzle and find as many words as you can within the given time.'
    },
    {
        question: 'Can I compete with other players in real-time?',
        answer: 'Absolutely! We have a multiplayer mode where you can challenge your friends or other players in real-time word battles.'
    },
    {
        question: 'What happens if I can\'t solve a word puzzle?',
        answer: 'If you\'re stuck on a word puzzle, you can use hints or skip to the next puzzle. Hints are available for every puzzle.'
    },
    {
        question: 'Is there a leaderboard to see the top players?',
        answer: 'Yes, we have a leaderboard that displays the top-scoring players. You can see where you rank among the word game community.'
    },
    {
        question: 'How do I report an issue or suggest a new feature?',
        answer: 'You can report any issues or provide suggestions by visiting our "Contact Us" page. We appreciate your feedback!'
    }
];

const FAQ = () => {
    // Initialize state to keep track of which FAQ item is currently expanded
    const [activeItem, setActiveItem] = useState(null);

    // Function to toggle the active FAQ item
    const toggleItem = (index) => {
        if (activeItem === index) {
            // If the clicked item is already active, close it
            setActiveItem(null);
        } else {
            // Otherwise, open the clicked item
            setActiveItem(index);
        }
    };

    return (
        <div>
        <h1>Game Hub</h1>
        <br></br><br></br>
        <div className="faq-container">
            <h2 className='head'>Frequently Asked Questions</h2>
            <ul>
                {faqItems.map((item, index) => (
                    <li key={index}>
                        <button className={`faq-question ${activeItem === index ? 'active' : ''}`} onClick={() => toggleItem(index)}>
                            {item.question}
                        </button>
                        {activeItem === index && <p className="faq-answer">{item.answer}</p>}
                    </li>
                ))}
            </ul>
            <Link to="/home">

            <button className="buttn">
                Back
            </button>
            </Link>
        </div>
        </div>
    );
};

export default FAQ;
>>>>>>> origin/main
