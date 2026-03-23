import useProfile from "./useProfile";


export default function PersonalInfo() {
  const {user} = useProfile();
  return <div>
    <h2> {user?.name}</h2>
    <p>{user?.email}</p>
    <img src={user?.avatar} alt="avatar" />
    <p>{user?.role}</p>
  </div>;
}
