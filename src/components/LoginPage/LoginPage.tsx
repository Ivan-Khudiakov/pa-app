import React, {ChangeEvent, useState} from "react"
import styles from "./LoginPage.module.css"

type PropsType = {
    handleLogin: () => void
}

export type FormType = {
    email: string
    password: string
}

export const LoginPage: React.FC<PropsType> = ({handleLogin}) => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState<null | string>(null)

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setForm( f => ({...f, [event.target.name]: event.target.value}))
    }

    const loginHandler = (form: FormType) => {
        if (form.email !== "123123@mail.ru") {
            setError("Вы ввели неверный email!")
        } else if (form.password !== "123123") {
            setError("Вы ввели неверный пароль!")
        } else {
            handleLogin()
        }
    }

    return (
        <div className="container">
            <div className={styles.login}>
                <h3>Log In</h3>
                {error && <div className={styles.errorMessage}>{error}</div>}
                <form className="col 12" onSubmit={e => e.preventDefault()}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="email" name="email" className="validate" onChange={changeHandler}/>
                            <label className="active" htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input type="password" name="password" className="validate" onChange={changeHandler}/>
                            <label className="active" htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="wawes-effect wawes-light btn blue"
                                onClick={() => loginHandler(form)}>Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
