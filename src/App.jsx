import './App.css'
import Navbar from '../src/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Health from './Pages/Health';
import News from './Pages/News';
import Tags from './Pages/Tags';
import Profile from './Pages/Profile';

function App() {

  return (   
    <Router> 
      <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/health" element={<Health/>} />
      <Route  path='/news' element={<News/>} />
     <Route path='/category/:categoryName' element={<Tags/>}/>
     <Route path='/country/:countryName' element={<Tags/>}/>
     <Route path='/language/:languageName' element={<Tags/>}/>
    </Routes>
  </Router>
  )
}

export default App
