import React, {useMemo, useState} from "react"
import {useSelector} from "react-redux"
import {AppRootStateType} from "../../../redux/redux-store"
import {CallType} from "../../../redux/profile-reducer"
import {Paginator} from "../../../common/Paginator/Paginator"
import {arrayPartialSelector} from "../../../redux/selectors"
import styles from "./CallHostoryPage.module.css"

export const CallHistoryPage = () => {

    const data = useSelector<AppRootStateType, Array<CallType>>(state => state.profile.data.calls)

    let [currentPage, setCurrentPage] = useState(1)

    const pageSize = 10

    const current = useMemo(() =>
        arrayPartialSelector(data, currentPage, pageSize),
        [data, currentPage, pageSize]
    )

    return (
        <div className={styles.callContainer}>
            <h2>История звонков</h2>
            <table className="striped centered">
                <thead>
                <tr>
                    <th>Дата</th>
                    <th>Время</th>
                    <th>Продолжительность</th>
                    <th>Стоимость</th>
                </tr>
                </thead>
                <tbody>
                {current.map(call => {
                    return (
                        <tr key={call.id}>
                            <td>{call.date}</td>
                            <td>{call.time}</td>
                            <td>{call.duration} сек.</td>
                            <td>{call.cost} руб.</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <Paginator pageSize={pageSize}
                       currentPage={currentPage}
                       totalCount={data.length}
                       setCurrentPage={setCurrentPage}/>
        </div>
    )
}
