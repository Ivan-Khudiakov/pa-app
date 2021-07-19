import React, {useState} from "react"
import {Route, useHistory} from "react-router-dom"
import {LoginPage} from "./components/LoginPage/LoginPage"
import {PersonalAccount} from "./components/PersonalAccount/PersonalAccount"
import "./App.css"

export const App = () => {

    const [isLogin, setIsLogin] = useState(false)

    const history = useHistory()

    const logoutHandler = () => {
        setIsLogin(false)
        history.push("/pa-app")
    }

    return (
        <div className="App">
            {isLogin
                ? <PersonalAccount logoutHandler={logoutHandler}/>
                : <Route path="/" render={() => <LoginPage setIsLogin={setIsLogin}/>}/>
            }
        </div>
    )
}

