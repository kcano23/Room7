import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reg from './views/Reg';
import Main from './views/Main';
import Login from './views/Login';
import Chat from './views/Chat';
import {Router} from '@reach/router';

function App() {
  const [logged,setLogged] = useState(null);
  return (
    <div className="App">
        <Router>
          <Reg 
              path ="/" 
              setLogged={setLogged}
          />
          <Login
              path="/login"
              setLogged={setLogged}
          />
          <Main path="/dashboard"
                logged={logged}
                setLogged={setLogged}
          />
          <Chat path="/api/allusers/chat"
                logged={logged}
                setLogged={setLogged}
          />
        </Router>      
    </div>
  );
}

export default App;
