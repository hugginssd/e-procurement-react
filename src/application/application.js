import React from 'react';
import {withStyles} from '@material-ui/core'
import styles from './styles';


class ApplicationComponent extends React.Component{

    render() {
      return (
        <div>
            Hello from ApplicationComponent
        </div>
      )
    }

}

export default withStyles(styles)(ApplicationComponent);