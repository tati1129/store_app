import axios from "axios";
import { useState, useEffect } from "react";
import type User from "../../types/User";
const PROFILE_URL = "https://api.escuelajs.co/api/v1/auth/profile";

export default function useProfile() {
  const [user, setUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    async function fetchProfile() {
      const access_token = localStorage.getItem("accee_token");
      const { data } = await axios.get(PROFILE_URL, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setUser(data);
    }
    fetchProfile();
  }, []);
  return { user };
}
