import s from "./UserCard.module.css";
import type { FC } from "react";
import type User from "../../types/User";
import { Link } from "react-router-dom";

export const UserCard: FC<User> = ({ email, name, avatar, id }) => {
  return (
    <div className={s.card}>
      <h3 className={s.name}>
        {" "}
        <Link to={`/users/${id}`}>{name}</Link>
      </h3>

      <p className={s.email}>{email}</p>
      <img className={s.image} src={avatar} alt={name} />
    </div>
  );
};
