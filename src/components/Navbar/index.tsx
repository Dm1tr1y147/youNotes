import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core'
import { Notes } from '@material-ui/icons'
import useStyles from '../../styles'

const routes = ['/']

const Navbar: React.FC = () => {
    const [position, setPosition] = useState(0)
    const history = useHistory()
    useEffect(() => {
        history.push(routes[position])
    }, [position, history])

    const classes = useStyles()

    return (
        <Paper elevation={5} className={classes.bottomBarPosition}>
            <BottomNavigation
                value={position}
                onChange={(e, newPos) => {
                    setPosition(newPos)
                }}
            >
                <BottomNavigationAction label="Notes" icon={<Notes />} />
            </BottomNavigation>
        </Paper>
    )
}

export default Navbar