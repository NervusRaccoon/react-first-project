import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <div className='app-header'>
          <Header />
        </div>
        <div className='app-navbar'>
          <Navbar />
        </div>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile"  element={<Profile />} />
            <Route path="/messages/*" element={<MessagesContainer />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
