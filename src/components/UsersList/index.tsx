import { useEffect, useState } from "react";
import type User from "../../types/User";
import s from "./UserList.module.css";
import axios from "axios";
import { UserCard } from "../UserCard";

export const UserList = () => {
  const [users, setUSers] = useState<User[]>([]);
  useEffect(() => {
    async function fetchUsers() {
      const { data } = await axios.get<User[]>(
        "https://api.escuelajs.co/api/v1/users",
      );
      setUSers(data);
    }
    fetchUsers();
  }, []);
  return (
    <div>
      <ul className={s.usersList}>
        {users.map((user) => (
          <li key={user.id}>
            <UserCard {...user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
