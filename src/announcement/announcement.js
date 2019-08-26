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
                <h5 class="alert-heading">Well done!</h5>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <hr/>
                <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                <a href="/viewannouncementdetails" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
       );
  }
}

export default withStyles(styles)(AnnouncementComponent);

AnnouncementComponent.propTypes = {
};
