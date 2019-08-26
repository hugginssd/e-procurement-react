import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import styles from './styles';
import NavBarComponent from '../navbar/navbar';

class HowToApplyComponent  extends React.Component {
 

  render() {

    const{classes} = this.props;

    return (
      <div>
            <NavBarComponent></NavBarComponent>
            <div className={classes.form}>
                <div class="card border-success mb-3">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body text-success">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <footer class="blockquote-footer">Provided by <cite title="Source Title">Procurement Regulatory Authority of Zimbabwe</cite></footer>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default withStyles(styles)(HowToApplyComponent) ;