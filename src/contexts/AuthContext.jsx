
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    const user = localStorage.getItem("authUser");
    if (user) {
      setAuthUser(JSON.parse(user)); 
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false); 
    }
  }, []);

  
  const login = (user) => {
    setAuthUser(user);
    setIsAuthenticated(true);
    localStorage.setItem("authUser", JSON.stringify(user)); // Store user in localStorage
    navigate("/home"); // Redirect to home page after login
  };

  
  const logout = () => {
    setAuthUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("authUser"); 
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
