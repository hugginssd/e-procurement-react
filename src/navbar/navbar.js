import React from 'react';
import {withStyles, Button} from '@material-ui/core'
import styles from './styles'
// import Typography from '@material-ui/core/Typography'

class NavBarComponent extends React.Component{

    render(){
        return(
            <div>
                <nav  class="navbar sticky-top navbar-expand-lg navbar-light bg-primary">
                    <a class="navbar-brand text-white"   href="/dashboard">E-Procurement System</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link text-white-50" href="/dashboard">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item"  onKeyPress={(e)=>this.openNewTender(e)}>
                            <a class="nav-link text-white" href="/creeatetender">New Tender</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/application">Apply Tender</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/howtoapply">How To Apply?</a>
                        </li>
                        </ul>
                    </div>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-light text-white my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </div>
        );
    }

    openNewTender =(e) =>{
        e.preventDefault();
        
        this.props.history.push('/createtender');
    }



}

export default withStyles(styles)(NavBarComponent);