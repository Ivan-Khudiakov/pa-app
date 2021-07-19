import React from "react"
import {useSelector} from "react-redux"
import {AppRootStateType} from "../../../redux/redux-store"
import {ProfileType} from "../../../redux/profile-reducer"
import styles from "./ProfilePage.module.css"

export const ProfilePage = () => {

    const data = useSelector<AppRootStateType, ProfileType>(state => state.profile.data)

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profile}>
                <div className="col 4">
                    <img className={styles.avatar} src={data.avatar} alt="avatar"/>
                </div>
                <div className="col 8">
                    <h2 className={styles.profileName}>{data.name}</h2>
                    <h6 className={styles.profileInfo}>Тарифный план: {data["package of services"]}</h6>
                    <h6 className={styles.profileInfo}>Дата регистрации: {data["registration date"]}</h6>
                </div>
            </div>
        </div>
    )
}
