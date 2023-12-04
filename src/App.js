import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';

const App = (props) => {
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
            <Route path="/profile" Component={() => <Profile content={props.appState.profilePage} />} />
            <Route path="/messages/*" Component={() => <Messages content={props.appState.messagePage} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
