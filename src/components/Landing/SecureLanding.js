import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/userReducer';
import Landing from './Landing';
import NotLogged from '../NotLogged/NotLogged';

class SecureLanding extends Component{
    componentDidMount(){
        this.props.getUser();
    }
render(){
    return(
        <div>
        {this.props.user.isAuthed ? <Landing /> : <NotLogged />}
        </div>
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, {getUser})(SecureLanding);