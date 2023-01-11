import { useState } from "react";
import { users } from "../util/usersData";

export default function Register() {
    const [newName, setNewName] = useState("");
    const [newPass, setNewPass] = useState("");

    function registerNewUser(userName, userPass) {
        users.push({
            "name": userName,
            "password": userPass,
        })
    }

    return <div>
        <h2>Register new user</h2>
        <input onChange={(input) => { setNewName(input.target.value) }} type="text" placeholder="Username"></input>
        <input onChange={(input) => { setNewPass(input.target.value) }} type="text" placeholder="Password"></input>
        <button onClick={() => { registerNewUser(newName, newPass) }}>Confirm</button>
    </div>
}