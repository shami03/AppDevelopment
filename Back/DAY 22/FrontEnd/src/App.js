import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/PlayerSignup';
import Home from './Components/Home';
import PublisherSignup from './Components/PublisherSignup';
import SideBar from './Components/SideBar';
import Games from './Components/Games';
import GamePage from './GamePage';
import Players from './Components/Players';

import Hint from './hint';
import Wordle from './wordle';
import Navbar from './Components/Navbar';
import AdminDashboard from './Components/AdminDashboard';
import UserDashboard from './Components/UserDashboard';

import Faq from './Components/faq';
import Terms from './Components/Terms';
import Privacy from './Components/Privacy';
import About from './Components/About';
import PublisherDashboard from './Components/PublisherDashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SideBar/>
      <Navbar/>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/player-signup' element={<Signup/>}/>
      <Route path='/publisher-signup' element={<PublisherSignup/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/games' element={<Games/>}/>
      <Route path='/gamepage' element={<GamePage/>}/>
      <Route path='/players' element={<Players/>}/>
      <Route path='/wordle' element={<Wordle/>}/>
      <Route path='/hint' element={<Hint/>}/>

      
      <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
      <Route path='/user-dashboard' element={<UserDashboard/>}/>
      <Route path='/ins-dashboard' element={<PublisherDashboard/>}/>
  
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/terms' element={<Terms/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
