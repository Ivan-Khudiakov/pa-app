import React, {useMemo, useState} from "react"
import {useSelector} from "react-redux"
import {AppRootStateType} from "../../../redux/redux-store"
import {PaymentType} from "../../../redux/profile-reducer"
import {Paginator} from "../../../common/Paginator/Paginator"
import {arrayPartialSelector} from "../../../redux/selectors"
import styles from "./BalancePage.module.css"

export const BalancePage = () => {

    const data = useSelector<AppRootStateType, Array<PaymentType>>(state =>
        state.profile.data["balance history"])

    let [currentPage, setCurrentPage] = useState(1)

    const pageSize = 10

    const current = useMemo(() =>
            arrayPartialSelector(data, currentPage, pageSize),
        [data, currentPage, pageSize]
    )

    let balance = data.map(o => o.payment).reduce ((sum, item) => sum + item)

    return (
        <div className={styles.balanceContainer}>
            <h2>Текущий баланс: {balance}</h2>
            <table className="striped centered">
                <thead>
                <tr>
                    <th>Дата</th>
                    <th>Время</th>
                    <th>Пополнение/Списание</th>
                </tr>
                </thead>
                <tbody>
                {current.map(payment => {
                    return (
                        <tr key={payment.id}>
                            <td>{payment.date}</td>
                            <td>{payment.time}</td>
                            <td>{payment.payment} руб.</td>
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
