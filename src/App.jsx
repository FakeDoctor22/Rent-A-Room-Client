import './App.css'
import Room from './pages/Room';
import RoomList from './pages/RoomList';
import Login from './pages/Login';
import Register from './pages/Register';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <figure><Link to="/"><img src="./src/assets/logo.png" alt="" /></Link></figure>
        <ul>
          <li>Land Owner's Login</li>
          <li><Link to='/'>Tenant's Login</Link></li>
          <li><Link to='/Register'>Register as Tenant</Link></li>
          <li><Link to="/Roomlist">Room List</Link></li>
          <li><Link to="/Room">My Room</Link></li>
          <li>Logout</li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Roomlist" element={<RoomList />} />
        <Route path="/Room" element={<Room />} />
      </Routes>
    </>
  );
};

export default App
