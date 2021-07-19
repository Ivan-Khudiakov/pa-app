import React, {useEffect, useState} from "react"
import {Route, useHistory, Redirect} from "react-router-dom"
import {LoginPage} from "./components/LoginPage/LoginPage"
import {PersonalAccount} from "./components/PersonalAccount/PersonalAccount"
import "./App.css"
import {ProfilePage} from "./components/PersonalAccount/ProfilePage/ProfilePage";
import {CallHistoryPage} from "./components/PersonalAccount/CallHistoryPage/CallHistoryPage";
import {BalancePage} from "./components/PersonalAccount/BalancePage/BalancePage";
import {Navbar} from "./components/PersonalAccount/Navbar/Navbar";
import {useDispatch} from "react-redux";
import {getProfile} from "./redux/profile-reducer";

export const App = () => {

    const [isLogin, setIsLogin] = useState(false)

    const history = useHistory()


    const dispatch = useDispatch()

    useEffect(() => {
        //requesting data from API on render
        if (isLogin) {
            dispatch(getProfile())
        }
    }, [isLogin])

    const logoutHandler = () => {
        setIsLogin(false)
    }

    const loginHandler = () => {
        setIsLogin(true)
        history.push('/profile')
    }

    if (!isLogin) return <LoginPage handleLogin={loginHandler}/>

    return (
        <div className="App">
            {isLogin && <Navbar logoutHandler={logoutHandler}/>}
            <Route exact path="/profile" render={() => <ProfilePage/>}/>
            <Route path="/callhistory" render={() => <CallHistoryPage/>}/>
            <Route path="/balance" render={() => <BalancePage/>}/>
        </div>
    )
}

