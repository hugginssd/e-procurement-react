import React from 'react'
import { withStyles } from '@material-ui/styles';
import styles from '../viewtenders/style'

class   ViewTendersComponent extends React.Component{

    render(){

        const{classes}=this.props;
        
        return(
            <div className={classes.table}>
            <table class="table">
                  <caption>List of registered candidates</caption>
                  <thead>
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">First name</th>
                          <th scope="col">Last name</th>
                          <th scope="col">Department</th>
                          <th scope="col">Candidate category</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <th scope="row">1</th>
                          <td>Tinashe</td>
                          <td>Chinyanga</td>
                          <td>Civil Engineering</td>
                          <td>Presidential</td>
                      </tr>
                      <tr>
                      <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Masariranwa</td>
                          <td>Information Technology</td>
                          <td>Chairman</td>
                      </tr>
                      <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>Page</td>
                          <td>Electrical Engineering</td>
                          <td>Secretary</td>
                      </tr>
                  </tbody>
              </table>

          </div>
        );
    }
}

export default withStyles(styles)(ViewTendersComponent);