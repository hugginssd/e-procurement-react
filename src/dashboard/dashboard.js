import React from 'react'
import NavBarComponent from './navbar/navbar';
import withStyles from '@material-ui/core/styles';
import styles from './styles';


class DashboardComponent extends React.Component{

    render(){
        return(<div>Hello from dashboard</div>);
    }
}

export default withStyles(styles)(DashboardComponent)