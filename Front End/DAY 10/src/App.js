
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import './App.css';
  import Login from './Components/Login';
  import Home from './Components/Home';
  import Signup from './Components/Signup';
  import Dashboard from './Components/Dashboard';
  import Profiles from './Components/Profiles';
  import Wordle from './wordle';
  import Hint from './hint';
  import Contact from './Components/contact';
  import AboutUs from './Components/AboutUs';
  import Graph from './Components/Dash';
  import FAQ from './Components/FAQ';
  import Terms from './Components/Terms';
  import PlayerDetailsTable from './Components/table';
  


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
     <Route path="/wordle" element={<Wordle/>}/>
     <Route path="/hint" element={<Hint/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/FAQ" element={<FAQ/>}/>
     <Route path="/terms" element={<Terms/>}/>
     <Route path="/about" element={<AboutUs/>}/>
     <Route path="/dash" element={<Graph/>}/>
     <Route path="/table" element={<PlayerDetailsTable/>}/>

     </Routes>
     </BrowserRouter>
   
    </div>
    );
  }
  
  export default App;
  