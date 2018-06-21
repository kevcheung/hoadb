import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/userReducer';
import Payment from './Payment';
import NotLogged from '../NotLogged/NotLogged';

class SecurePayment extends Component{
    componentDidMount(){
        this.props.getUser();
    }
render(){
    return(
        <div>
        {this.props.user.isAuthed ? (<Payment />) : (<NotLogged />)}
        </div>
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, {getUser})(SecurePayment);