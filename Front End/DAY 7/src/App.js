
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Componenets/Login';
import Home from './Componenets/Home';
import Signup from './Componenets/Signup';
import Dashboard from './Componenets/Dashboard';
import Profiles from './Componenets/Profiles';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Signup/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/home" element={<Home/>}/>
     <Route path="/dashboard" element={<Dashboard/>}/>
     <Route path="/prof" element={<Profiles/>}/>
     </Routes>
     </BrowserRouter>
   
    </div>
    );
  }
  
  export default App;
  