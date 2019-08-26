import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

class AnnouncementComponent extends React.Component {
 

  render() {

    const {classes} = this.props;

    return (
        <div className={classes.form}>
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Well done!</h4>
                <h5 class="alert-heading">Swift Technologies (Pvt) Ltd</h5>
                <p>Aww yeah, you have successfully reached to the final stages of the Electronic Tender Selection Process and finally became the ultimate winner. For transparency sake the selection process is done independently by the system.</p>
                <hr/>
                <p class="mb-0">Whenever you need information about how to apply and how the Tender Selection Process is done, <a href="/howtoapply">Click here</a></p>
                <a href="/viewannouncementdetails" class="btn btn-primary">View details</a>
            </div>
        </div>
       );
  }
}

export default withStyles(styles)(AnnouncementComponent);

