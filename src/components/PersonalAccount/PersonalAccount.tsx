import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import {Route} from "react-router-dom"
import {getProfile} from "../../redux/profile-reducer"
import {Navbar} from "./Navbar/Navbar"
import {ProfilePage} from "./ProfilePage/ProfilePage"
import {CallHistoryPage} from "./CallHistoryPage/CallHistoryPage"
import {BalancePage} from "./BalancePage/BalancePage"


type PropsType = {
    logoutHandler: () => void
}

export const PersonalAccount: React.FC<PropsType>  = ({logoutHandler}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        //requesting data from API on render
        dispatch(getProfile())
    }, [])

    return (
        <>
            <Navbar logoutHandler={logoutHandler}/>
                <Route exact path="/" render={() => <ProfilePage/>}/>
                <Route path="/callhistory" render={() => <CallHistoryPage/>}/>
                <Route path="/balance" render={() => <BalancePage/>}/>
        </>
    )
}
