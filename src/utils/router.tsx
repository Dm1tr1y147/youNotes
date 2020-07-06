import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Grid, useTheme, Box } from '@material-ui/core'

import LoginForm from '../components/LoginForm'
import ListNotes from '../components/ListNotes'
import useStyles from '../styles'

const Router: React.FC = () => {
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <Box my={4}>
            <Grid container>
                <Grid item xs={false} sm={2} />
                <Grid container item xs={12} sm={8} className={classes.topPadding}>
                    <Switch>
                        <Route path='/login' render={
                            (): JSX.Element => (localStorage.getItem('token')) ? <Redirect to='/' /> : <LoginForm />
                        } />
                        <Route exact path='/' render={
                            (): JSX.Element => (!localStorage.getItem('token')) ? <Redirect to='/login' /> : <ListNotes />
                        } />
                    </Switch>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Router