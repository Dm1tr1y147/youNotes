import React, { Dispatch, SetStateAction } from 'react'
import { Dialog, DialogTitle, Avatar, Button, DialogContent, DialogActions, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import { Person } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'

export interface UserDialogProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const UserDialog: React.FC<UserDialogProps> = props => {
    const { open, setOpen } = props

    const history = useHistory()

    const logOut = () => {
        localStorage.removeItem('token')
        history.push("/login")
    }

    return (
        <Dialog open={open} fullWidth={true} onClose={setOpen}>
            <DialogTitle>Account</DialogTitle>
            <DialogContent className="accountContainer">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <Person />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                        Lol
                    </ListItemText>
                </ListItem>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)} color="primary" autoFocus>
                    Close
                </Button>
                <Button onClick={
                    () => {
                        setOpen(false)
                        logOut()
                    }
                } color="primary" >
                    Log out
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UserDialog