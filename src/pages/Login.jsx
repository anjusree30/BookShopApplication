
import React, { useState, useContext } from "react";

import AuthContext from "../contexts/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const { login } = useContext(AuthContext);

  
  const users = [
    { username: "admin", password: "admin123" },
    { username: "user", password: "user123" },
  ];

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      
      login(user);
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded shadow-md w-1/3">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="block w-full mb-2 p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full mb-2 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded mt-4"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
