import { createContext, useEffect, useState } from "react";

// Create Auth Context
const AuthContext = createContext();

// Create Auth Context Provider
export const AuthContextProvider = ({ children }) => {
  // Set State for components to access auth token 
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("authToken")
  );

  useEffect(() => {
    if (authToken) {
      localStorage.setItem("authToken", authToken);
    } else {
      localStorage.removeItem("authToken");
    }
  }, [authToken]);

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext