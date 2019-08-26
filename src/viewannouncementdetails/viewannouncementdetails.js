import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import NavBarComponent from '../navbar/navbar';

class ViewAnnouncementDetailsComponent  extends React.Component {
 

  render() {
    return (
      <div>
            <NavBarComponent></NavBarComponent>
            Hello from ViewAnnouncementDetailsComponent
      </div>
    );
  }
}

export default withStyles(styles)(ViewAnnouncementDetailsComponent) ;
