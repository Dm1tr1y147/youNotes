import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    topPadding: theme.mixins.toolbar,
    bottomBarPosition: {
        position: 'fixed',
        bottom: 0,
        width: "100vw"
    },
    navBarPadding: {
        paddingRight: '0 !important'
    },
    userIconPosition: {
        margin: '0 4px !important'
    },
    searchBar: {
        backgroundColor: '#ffffff',
        width: '100%',
        borderRadius: '99999px',
        padding: '0 16px'
    }
}))

export default useStyles