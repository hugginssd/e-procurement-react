import React from 'react';
import {withStyles, CssBaseline} from '@material-ui/core';
// import  CssBaseline from '@material-ui/core';
import styles from './styles';
import NavBarComponent from '../navbar/navbar';


class CreateTenderComponent extends React.Component{

    render(){

        const{classes} = this.props;

        return(
            <div>
            <NavBarComponent></NavBarComponent>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                                <main className={classes.main}>
                                <CssBaseline></CssBaseline>
                                    <form className={classes.form}>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                            <label for="inputEmail4">First name</label>
                                            <input type="text" class="form-control" id="inputEmail4" placeholder="First name"/>
                                            </div>
                                            <div class="form-group col-md-6">
                                            <label for="inputPassword4">Last name</label>
                                            <input type="text" class="form-control" id="inputPassword4" placeholder="Last name"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="department">Department</label>
                                            <select id="department" class="form-control">
                                                <option>Default select</option>
                                                <option>Civil Engineering</option>
                                                <option>Mechanical Engineering</option>
                                                <option>Information Technology</option>
                                                <option>Electrical Engineering</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="category">Candidate category</label>
                                            <select id="category" class="form-control">
                                                <option>Default select</option>
                                                <option>Presidential</option>
                                                <option>Chairperson</option>
                                                <option>Secretary</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputAddress">Address</label>
                                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputAddress2">Address 2</label>
                                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                            <label for="inputCity">City</label>
                                            <input type="text" class="form-control" id="inputCity"/>
                                            </div>
                                            <div class="form-group col-md-4">
                                            <label for="inputState">State</label>
                                            <select id="inputState" class="form-control">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                            </div>
                                            <div class="form-group col-md-2">
                                            <label for="inputZip">Zip</label>
                                            <input type="text" class="form-control" id="inputZip"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                            <label class="form-check-label" for="gridCheck">
                                                Check me out
                                            </label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm">
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                            </div>
                                            <div class="col-sm">
                                                <button type="submit" href="/dashboard" class="btn btn-primary">Dashboard</button>
                                            </div>
                                        </div>
                                    </form>
                                </main> 
                       </div>
                            <div class="col-sm">
                                <main className={classes.main}>
                                    <CssBaseline></CssBaseline>
                                    {/* <ViewCandidatesComponent></ViewCandidatesComponent> */}
                                </main>
                            </div>
                        </div>
                </div>     
        </div>
        );
    }
}

export default withStyles(styles)(CreateTenderComponent);

