import './App.css';
import Profile from './Components/Profile';
import WelcomePage from './Components/WelcomePage';
import { useState } from 'react';
import { users } from './util/usersData';

//1. Login: username and password
//2. WelcomePage: Profile
//3. check from users' data 
//4. add to users' data

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //initial value of isLoggedIn
  const [currentUser, setCurrentUser] = useState(""); //save current user's name

  function checkLogin(username, password) {
    if (users.map((user) => user.name === username && user.password === password)) {
      setIsLoggedIn(true);
      setCurrentUser(username);
      console.log("successfully logged in");
    } else {
      console.log("username or password wrong");
    }
  }

  return (
    <div className="App">
      {isLoggedIn ? <Profile logoutBtn={setIsLoggedIn} name={currentUser} /> : <WelcomePage loginForm={checkLogin} />}
      {/* send checkLogin's location */}
    </div>
  );
}

export default App;
