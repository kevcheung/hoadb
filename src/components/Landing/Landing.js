import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUser} from '../../ducks/userReducer';
import Admin from '../Admin/Admin';
import User from '../User/User';

class Landing extends Component {
    componentDidMount() {
        this.props.getUser();
      }
    render() {
        // console.log(this.props)
      return (
            <div className="Landing">
            {this.props.user.user.isadmin ? <Admin /> : <User />}
            </div>
      );
    }
  }

  const mapStateToProps = state => state;

  export default connect(mapStateToProps, {getUser})(Landing);