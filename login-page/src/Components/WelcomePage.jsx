import '../styles/welcome.css';
import { useState } from "react";
import Register from './Register';

export default function WelcomePage(prop) {
    const { loginForm } = prop;
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");

    return <div className="userInput">
        <input onChange={(input) => setUserName(input.target.value)} type="text" placeholder="Username" />
        <input onChange={(input) => setPassword(input.target.value)} type="text" placeholder="Password" />
        <button onClick={() => loginForm(userName, password)}>Login</button>
        <button onClick={() => <Register />}>Register</button>
    </div >
}