import './App.css';
import Component from './Components/Component';
import HelloXml from './Components/HelloXml';
import Props from './Components/Props';
import List from './Components/List';
import States from './Components/States';
import FetchData from './Components/FetchData';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home';
import { Profile } from './Pages/Profile';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
