import React, { useState, ChangeEvent } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { TextField, Grid, Button } from '@material-ui/core'

import { LOGIN_USER } from '../../graphql/mutations'

const LoginForm: React.FC = () => {

    const history = useHistory()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [login] = useMutation(LOGIN_USER, {
        onCompleted({ login: user }) {
            localStorage.setItem('token', user.token)
            console.log(user)
            history.push("/")
        }
    })

    const handleSubmit = async () => {
        try {
            const {data} = await login({ variables: { email, password } })
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <form className="Form" onSubmit={e => {
            e.preventDefault()
            handleSubmit()
        }}>
            <Grid container>
                <Grid item xs={12} sm={8}>
                    <TextField
                        variant="outlined"
                        type="email"
                        value={email}
                        label="Email"
                        onChange={
                            (e: ChangeEvent<HTMLInputElement>): void => {
                                setEmail(e.target.value)
                            }
                        }
                    />
                    <TextField
                        variant="outlined"
                        type="password"
                        value={password}
                        label="Password"
                        onChange={
                            (e: ChangeEvent<HTMLInputElement>): void => {
                                setPassword(e.target.value)
                            }
                        }
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button type="submit" variant="contained" color="primary">
                        Log in
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default LoginForm