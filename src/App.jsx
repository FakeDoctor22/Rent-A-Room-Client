import './App.css'
import Room from './pages/Room';
import RoomList from './pages/RoomList';
import Login from './pages/Login';
import Register from './pages/Register';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className='flex justify-between bg-orange-500 p-4'>
        <div className='text-white font-bold text-2xl ml-4'><Link to="/">Rent A Room</Link></div>
        <ul className='flex gap-10 mr-4 text-white'>
          <li className='border-2 border-white p-2'><Link to='/'>Register as Tenant</Link></li>
          <li className='border-2 border-white p-2'><Link to="/Roomlist">Room List</Link></li>
          <li className='border-2 border-white p-2'><Link to="/Room">My Room</Link></li>
          <li className='border-2 border-white p-2'>Logout</li>
        </ul>
      </nav>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/Roomlist" element={<RoomList />} />
        <Route path="/Room" element={<Room />} />
      </Routes>
      <footer className='flex justify-between'>
        <h1 className='italic'>© Rent A Room Web Application by Group 4</h1>
        <h1>Admin Login</h1>
      </footer>
    </div>
  );
};

export default App
