import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getFavInfo, deleteFavInfo} from '../../ducks/favReducer';

class Favorites extends Component {
    constructor(props){
      super(props);
      this.state = {
      }
  }
  componentDidMount(){
    this.props.getFavInfo(this.props.user.user.id)
  }
  render() {
    // console.log(this.props)
    const favList = this.props.favorites.favoritesList.map((curr, index) => {
        return <div key = {index}>
        {/* <button onClick={() => this.props.getFavInfo(this.props.favorites.favoritesList[curr.id]) }>{curr.hoaname}</button> */}
        <p>{curr.hoaname}</p>
        <button className="deleteButton" onClick={ () => this.props.deleteFavInfo(curr.id)
            .then(() => this.props.getFavInfo(this.props.user.user.id))}>Delete from Favorites</button>
        <p>{curr.maintenancefee}</p>
        <p>{curr.refinancefee}</p>
        <p>{curr.resalecertfee}</p>
        <p>{curr.otherfees}</p>
        <p>{curr.mailingaddress}</p>
        </div>
    })
    return(
        <div className="favorites">
        {favList}
        </div>
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, {getFavInfo, deleteFavInfo})(Favorites);