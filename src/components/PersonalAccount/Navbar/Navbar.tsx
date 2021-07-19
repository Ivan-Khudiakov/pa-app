import React from "react"
import {Link} from "react-router-dom"

type PropsType = {
    logoutHandler: () => void
}

export const Navbar: React.FC<PropsType> = ({logoutHandler}) => {
    return (
        <nav>
            <div className="nav-wrapper blue">
                <ul id="nav-mobile" className="hide-on-med-and-down">
                    <li><Link to='/'>Профиль</Link></li>
                    <li><Link to='/callhistory'>История звонков</Link></li>
                    <li><Link to='/balance'>Баланс</Link></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li onClick={logoutHandler}><Link to="/">Выход</Link></li>
                </ul>
            </div>
        </nav>
    )
}
