import React, { useState } from 'react'
import { AppBar, Toolbar, useScrollTrigger, Slide, IconButton } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

import Search from '../Search'
import UserDialog from '../userDialog'
import useStyles from '../../styles'

const TopBar: React.FC = () => {
    const hideOnScroll: boolean = useScrollTrigger()
    const [openDialog, setOpenDialog] = useState(false)
    const classes = useStyles()

    return (
        <>
        <Slide in={!hideOnScroll} >
            <AppBar position="fixed">
                <Toolbar className={classes.navBarPadding}>
                    <Search />
                    <IconButton className={classes.userIconPosition} aria-label="account of current user" onClick={() => setOpenDialog(true)}>
                        <AccountCircle />
                    </IconButton>
                    <UserDialog open={openDialog} setOpen={setOpenDialog} />
                </Toolbar>
            </AppBar>
        </Slide>
        {/* Toolbar is used for top padding for navbar */}
		<Toolbar />
        </>
    )
}

export default TopBar