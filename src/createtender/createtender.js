import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import NavBarComponent from '../navbar/navbar';


class CreateTenderComponent extends React.Component{

    render(){
        return(
                <div>
                
                        <NavBarComponent></NavBarComponent>
                         Hello from CreateTenderComponent
                
                </div>
        );
    }
}

export default withStyles(styles)(CreateTenderComponent);

