import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/userReducer';
import Comments from './Comments';
import NotLogged from '../NotLogged/NotLogged';

class SecureComments extends Component{
    componentDidMount(){
        this.props.getUser();
    }
render(){
    return(
        <div>
        {this.props.user.isAuthed ? (<Comments />) : (<NotLogged />)}
        </div>
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, {getUser})(SecureComments);