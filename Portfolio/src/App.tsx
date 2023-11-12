import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home/Home'
import { AboutMe } from './components/AboutMe/AboutMe'
import { Contact } from './components/Contact/Contact'
import { MyWork } from './components/MyWork/MyWork'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <div><NavLink to='/' style={({isActive}) => ({color: isActive? 'red':'white'})}>Home</NavLink></div>
          <div><NavLink to='/myWork' style={({isActive}) => ({color: isActive? 'red':'white'})}>My Works</NavLink></div>
          <div><NavLink to='/aboutMe' style={({isActive}) => ({color: isActive? 'red':'white'})}>About Me</NavLink></div>
          <div><NavLink to='/contact' style={({isActive}) => ({color: isActive? 'red':'white'})}>Contact</NavLink></div>
        </div>
        <div className="main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/myWork' element={<MyWork />} />
            <Route path='/aboutMe' element={<AboutMe />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
