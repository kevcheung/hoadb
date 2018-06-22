import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <Link to="/"><button className="logo">door / door</button></Link>
        <button className="menu" onClick={this.showMenu}>Menu</button>
        {this.state.showMenu ? (
              <div className="dropdown" ref={(element) => { this.dropdownMenu = element}}>
                <Link to="/about"><button className="dropdownItems">About</button></Link>
                <Link to="/favorites"><button className="dropdownItems">Favorites</button></Link>
                <Link to="/landing"><button className="dropdownItems">HOA Search</button></Link>
                {this.props.user.isAuthed ? <a href={process.env.REACT_APP_LOGOUT}><button className="dropdownItems">Logout</button></a> : null}
              </div>
            ) :  null }
      </nav>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {getUser})(Navbar);