import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/userReducer';
import Favorites from './Favorites';
import NotLogged from '../NotLogged/NotLogged';

class SecureFavorites extends Component{
    componentDidMount(){
        this.props.getUser();
    }
render(){
    return(
        <div>
        {this.props.user.isAuthed ? (<Favorites />) : (<NotLogged />)}
        </div>
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, {getUser})(SecureFavorites);