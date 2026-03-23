import { useEffect, useState, type ReactNode } from "react";
import type User from "../types/User";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
const PROFILE_URL = "https://api.escuelajs.co/api/v1/auth/profile";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | undefined>(undefined)
     useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    async function fetchProfile() {
      const { data } = await axios.get(PROFILE_URL, config);
      setUser(data);
    }
    if(accessToken)fetchProfile();
  }, []);
  return (
  <AuthContext.Provider value={{user,setUser}}>
{children}
  </AuthContext.Provider>
  );
};
