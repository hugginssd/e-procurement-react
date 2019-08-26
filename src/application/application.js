import React from 'react';
import {withStyles} from '@material-ui/core'
import styles from './styles';
import NavBarComponent from '../navbar/navbar';


class ApplicationComponent extends React.Component{

    render() {
      return (
        <div>
            <NavBarComponent></NavBarComponent>
            Hello from ApplicationComponent
        </div>
      );
    }

}

export default withStyles(styles)(ApplicationComponent);