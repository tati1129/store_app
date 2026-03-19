import type { FC } from "react"
import styles from "./ProfileCard.module.css";


interface Props{
    name: string,
    discription: string
    avatar: string,
}


// export default function ProfileCard({avatar,name,age, discription} : Props){
const ProfileCard: FC<Props> = ({name, discription, avatar}) =>{
    return(
        <div className={styles.container}>
            <h2 className={styles.profileName}>{name}</h2>
            <p>{discription}</p>
            <img src={avatar} alt="User avatar" />

        </div>
    )
}

export default ProfileCard;