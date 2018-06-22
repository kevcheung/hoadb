import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import {getUser} from '../../ducks/userReducer';
// import Admin from '../Admin/Admin';
// import User from '../User/User';
// import Landing from '../Landing/Landing';
// import Favorites from '../Favorites/Favorites';
// import Comments from '../Comments/Comments';
// import Payment from '../Payment/Payment';
import './Home.css';

class Home extends Component {
    componentDidMount() {
        this.props.getUser();
      }
    render() {
      // console.log(this.props)
      return (
          <div className="homecomp">
            <div className="home-overlay">
              <h1>door / door</h1>
            </div>
              {this.props.user.isAuthed ? 
              <a href="http://localhost:3000/#/landing"><button className="homeButton">Search for an HOA</button></a> : 
              <a href={process.env.REACT_APP_LOGIN}><button className="homeButton">Login</button></a>}
          </div>
      );
    }
  }

  const mapStateToProps = state => state;

  export default connect(mapStateToProps, {getUser})(Home);