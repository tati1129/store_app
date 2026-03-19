import { useParams } from "react-router-dom";
import type User from "../../types/User";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    async function fetchUser() {
      const { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/users/${id}`,
      );
      setUser(data);
    }
    fetchUser();
  }, [id]);

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
      <img src={user?.avatar} alt={user?.name} />
      <p>Role: {user?.role}</p>
    </div>
  );
}
