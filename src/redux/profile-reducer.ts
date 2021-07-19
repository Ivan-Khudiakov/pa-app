import {Dispatch} from "redux"
import {profileAPI}  from "../api/api"

export type CallType = {
    id: number
    date: string
    time: string
    duration: number
    cost: number
}
export type PaymentType = {
    id: number
    date: string
    time: string
    payment: number
}
export type ProfileType = {
    name: string
    avatar: string
    "package of services": string
    "registration date": string
    "calls": Array<CallType>
    "balance history": Array<PaymentType>
}

const SET_PROFILE = "profile/SET_PROFILE"

type ActionType = ReturnType<typeof setProfile>

const initialState = {
    data: {
        name: "",
        avatar: "",
        "package of services": "",
        "registration date": "",
        "calls": [
            {id: 0, date: "", time: "", duration: 0, cost: 0},
        ],
        "balance history": [
            {id: 0, date: "", time: "", payment: 0},
        ]
    }
}

export type ProfileStateType = typeof initialState

export const profileReducer = (state: ProfileStateType = initialState, action: ActionType): ProfileStateType => {
    switch (action.type) {
        case SET_PROFILE: {
           return {...state, data: action.profile}
        }
        default:
            return state
    }
}

export const setProfile = (profile: ProfileType) => ({type: SET_PROFILE, profile} as const)

export const getProfile = () => async (dispatch: Dispatch) => {
    try {
        let response = await profileAPI.getProfile()
        dispatch(setProfile(response.data))
    } catch (error) {
        console.log(error)
    }
}


