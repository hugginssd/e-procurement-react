import React from 'react'
import NavBarComponent from '../navbar/navbar';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import AnnouncementComponent from '../announcement/announcement';


class DashboardComponent extends React.Component{

    render(){
        return(
            <div>
                 <NavBarComponent></NavBarComponent>
                 <AnnouncementComponent></AnnouncementComponent>
            </div>
        );
    }
}

export default withStyles(styles)(DashboardComponent)