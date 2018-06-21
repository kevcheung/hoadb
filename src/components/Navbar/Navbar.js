import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUser} from '../../ducks/userReducer';
import './Navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
}
  
showMenu(e) {
    e.preventDefault();
    this.setState({ showMenu: true }, () => {document.addEventListener('click', this.closeMenu)});
}
  
closeMenu() {
    this.setState({ showMenu: false }, () => {document.removeEventListener('click', this.closeMenu)});
}
componentDidMount(){
  this.props.getUser();
}
  render() {
    return (
      <nav className="navbar">
        <a  href="http://localhost:3000/#/"><button className="logo">door / door</button></a>
        <button className="menu" onClick={this.showMenu}>Menu</button>
        {this.state.showMenu ? (
              <div className="dropdown" ref={(element) => { this.dropdownMenu = element}}>
                <a href="http://localhost:3000/#/about"><button className="dropdownItems">About</button></a>
                <a href="http://localhost:3000/#/favorites"><button className="dropdownItems">Favorites</button></a>
                <a href="http://localhost:3000/#/landing"><button className="dropdownItems">HOA Search</button></a>
                {this.props.user.isAuthed ? <a href={process.env.REACT_APP_LOGOUT}><button className="dropdownItems">Logout</button></a> : null}
              </div>
            ) :  null }
      </nav>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {getUser})(Navbar);