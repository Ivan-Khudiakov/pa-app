import axios from "axios"
import {ProfileType} from "../redux/profile-reducer"

const instance = axios.create({
    baseURL: `${process.env.PUBLIC_URL}/db.json`
})

export const profileAPI = {
    getProfile() {
        return instance.get<ProfileType>("")
    }
}

