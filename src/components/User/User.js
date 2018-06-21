import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import {getComments} from '../../ducks/commentsReducer';
import {getHoaInfo, editHoaInfo} from '../../ducks/hoaReducer';
import {addFavInfo} from '../../ducks/favReducer';
import Comments from '../Comments/Comments';
import './User.css';

class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      hoaname: '',
      maintenancefee: '',
      transferfee: '',
      refinancefee: '',
      resalecertfee: '',
      otherfees: '',
      mailingaddress: '',
      editClick: false,
      hoaid: null
    }
}

enterHoaNameHandler = e => {
  // console.log(e.target.value);
  this.setState({hoaname: e.target.value})
};
onSubmitHandler = e => {
  e.preventDefault();
};
onEditSubmitHandler = (id) => {
  this.props.editHoaInfo(id, this.state.hoaname, this.state.maintenancefee, this.state.transferfee, this.state.refinancefee, this.state.resalecertfee, this.state.otherfees, this.state.mailingaddress);
  this.setState({
    editClick: false
  })
};
onChangeHoaHandler = () =>{
  let newHoaName = this.refs.newHoaName.value;
  let newMaintenanceFee = this.refs.newMaintenanceFee.value;
  let newTransferFee = this.refs.newTransferFee.value;
  let newRefinanceFee = this.refs.newRefinanceFee.value;
  let newResaleCertFee = this.refs.newResaleCertFee.value;
  let newOtherFee = this.refs.newOtherFee.value;
  let newMailingAddress = this.refs.newMailingAddress.value;
  this.setState({
    hoaname: newHoaName,
    maintenancefee: newMaintenanceFee,
    transferfee: newTransferFee,
    refinancefee: newRefinanceFee,
    resalecertfee: newResaleCertFee,
    otherfees: newOtherFee,
    mailingaddress: newMailingAddress
  })
};
editClickHandler = (id) => {
  this.setState({
    editClick: !this.state.editClick,
    hoaid: id,
    hoaname: this.props.hoa.searchResult[0].hoaname,
    maintenancefee: this.props.hoa.searchResult[0].maintenancefee,
    transferfee: this.props.hoa.searchResult[0].transferfee,
    refinancefee: this.props.hoa.searchResult[0].refinancefee,
    resalecertfee: this.props.hoa.searchResult[0].resalecertfee,
    otherfees: this.props.hoa.searchResult[0].otherfees,
    mailingaddress: this.props.hoa.searchResult[0].mailingaddress
  })
};

    render() {
      let searchParam;
      if (this.props.hoa.searchResult !== undefined && this.props.hoa.searchResult.length > 0){
        // console.log(this.state)
      searchParam = this.props.hoa.searchResult.map((curr, index) => {
        // console.log(curr)
      return (
          <div key = {index}>
          {(this.state.editClick && this.state.hoaid === curr.id) ? 
          <div>
            <input
                    ref="newHoaName"
                    value={this.state.hoaname}
                    onChange={this.onChangeHoaHandler}
                    type="text"
                    name="hoaname"
                />
                <p>Maintenance Fee</p>
                <input
                    ref="newMaintenanceFee"
                    value={this.state.maintenancefee}
                    onChange={this.onChangeHoaHandler}
                    type="number"
                    name="maintenancefee"
                />
                <p>Transfer Fee</p>
                <input
                    ref="newTransferFee"
                    value={this.state.transferfee}
                    onChange={this.onChangeHoaHandler}
                    type="number"
                    name="transferfee"
                />
                <p>Refinance Fee</p>
                <input
                    ref="newRefinanceFee"
                    value={this.state.refinancefee}
                    onChange={this.onChangeHoaHandler}
                    type="number"
                    name="refinancefee"
                />
                <p>Resale Certificate Fee</p>
                <input
                    ref="newResaleCertFee"
                    value={this.state.resalecertfee}
                    onChange={this.onChangeHoaHandler}
                    type="number"
                    name="resalecertfee"
                />
                <p>Other Fees</p>
                <input
                    ref="newOtherFee"
                    value={this.state.otherfees}
                    onChange={this.onChangeHoaHandler}
                    type="number"
                    name="otherfees"
                />
                <p>Mailing Address</p>
                <input
                    ref="newMailingAddress"
                    value={this.state.mailingaddress}
                    onChange={this.onChangeHoaHandler}
                    type="text"
                    name="mailingaddress"
                />
                <button className="saveChange" onClick={ () => this.onEditSubmitHandler(curr.id)}>Save Changes</button>
          </div> :
          <div>
            <p className="hoainfo">HOA Name: {curr.hoaname}</p>
            <p className="hoainfo">Maintenance Fee: {curr.maintenancefee}</p>
            <p className="hoainfo">Refinance Fee: {curr.refinancefee}</p>
            <p className="hoainfo">Resale Certificate Fee: {curr.resalecertfee}</p>
            <p className="hoainfo">Other Fees: {curr.otherfees}</p>
            <p className="hoainfo">Mailing Address: {curr.mailingaddress}</p>
            {this.props.user.user.isadmin ? 
            <button className="editHoa" onClick={ () => this.editClickHandler(curr.id)}>Edit HOA</button> : null}
            </div>}
          </div>
        )
      }) ;
      // return searchParam.hoaname;
      }
      // console.log(this.props.hoa.searchResult.hoaname)
      const { hoaname } = this.state;
      return (
        <div>
        <p>HOA Search</p>
              <form onSubmit={this.onSubmitHandler}>
                <input
                    value={hoaname}
                    onChange={(e) => this.enterHoaNameHandler(e)}
                    type="text"
                    name="hoaname"
                />
                  <button className="selectHOA" onClick={ () => this.props.getHoaInfo(hoaname).then(() => this.props.getComments(this.props.hoa.searchResult[0].id))}>Select HOA</button>
              </form>
          {searchParam}
          {(this.props.hoa.searchResult[0]) && 
          <button className="addHOA" onClick={ () => this.props.addFavInfo(this.props.user.user.id, this.props.hoa.searchResult[0].id)}>Add to Favorites</button>}
          {(this.props.hoa.searchResult[0]) && <Comments />}
        </div>
      );
    }
  }

const mapStateToProps = state => state;

export default connect(mapStateToProps, {getHoaInfo, getComments, editHoaInfo, addFavInfo})(User);

// export default User;