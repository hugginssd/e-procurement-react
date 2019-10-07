import React from 'react';
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
                    <div class="card-header text-success">
                     <h5>How to apply?</h5> 
                    </div>
                    <div class="card-body text-success">
                        <h6 class="card-title">Tender Application Process</h6>
                        <p class="card-text">Get an online login & apply for government tenders - login to the eprocurement website and enroll yourself. When applying for govt tender, do ensure that you don't miss out on any of the instructions and end up uploading the documents in wrong format. You also need to be careful about the tender submission deadline.</p>
                        {/* <footer class="blockquote-footer">Provided by <cite title="Source Title">Procurement Regulatory Authority of Zimbabwe</cite></footer> */}
                    </div>
                    <div class="card-body text-success">
                        <h6 class="card-title">Tender Selection Process</h6>
                        <p class="card-text">e-Tendering System (or Electronic Tendering System) facilitates the complete tendering process from the advertising of the requirement through to the placing of the contract. This includes the exchange of all relevant documents in electronic format. Similar terms: RFQ(request for quotation)</p>
                        <footer class="blockquote-footer">Provided by <cite title="Source Title">Procurement Regulatory Authority of Zimbabwe.</cite></footer>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default withStyles(styles)(HowToApplyComponent) ;