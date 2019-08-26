const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', //Fix IE issue
        marginLeft: theme.spacing.unit *3,
        marginRight: theme.spacing.unit *3,
        color: 'red',
         [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
             width: 'auto',
             marginLeft: 'auto',
             marginRight: 'auto',
        },
    },
    card:{
        width: 'auto',
        color: 'red',
        marginTop: theme.spacing.unit * 8,
    },
    typography:{
        marginTop: theme.spacing.unit * 8,
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height:90,
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    footerPaper:{
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
       },
    },

    form: {
        width: '100%',
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    hasAccountHeader: {
        width: '100%'
    },
    logInLink: {
        width: '100%',
        textDecoration: 'none',
        color: '#303f9f',
        fontWeight: 'bolder'
    },
    errorText: {
        color: 'red',
        textAlign: 'center'
    }
});

export default styles;