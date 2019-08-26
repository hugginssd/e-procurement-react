import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import NavBarComponent from '../navbar/navbar';

class ViewAnnouncementDetailsComponent  extends React.Component {
 

  render() {
    return (
      <div>
            <NavBarComponent></NavBarComponent>
            <div class="card border-success mb-3" style={{width: 400}}>
              <div class="card-header">Header</div>
              <div class="card-body text-success">
                <h5 class="card-title">Success card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
      </div>
    );
  }
}

export default withStyles(styles)(ViewAnnouncementDetailsComponent) ;
