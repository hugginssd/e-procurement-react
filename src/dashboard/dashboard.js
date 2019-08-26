import React from 'react'
import NavBarComponent from '../navbar/navbar';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';


class DashboardComponent extends React.Component{

    render(){
        return(
            <div>
                 <NavBarComponent></NavBarComponent>
            </div>
        );
    }
}

export default withStyles(styles)(DashboardComponent)