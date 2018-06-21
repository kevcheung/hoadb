import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
// import {getUser} from '../../ducks/userReducer';
import {addHoaInfo} from '../../ducks/hoaReducer';
import User from '../User/User';
import './Admin.css';

class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            hoaname: '',
            maintenancefee: '',
            transferfee: '',
            refinancefee: '',
            resalecertfee: '',
            otherfees: '',
            mailingaddress: ''
        }
    }
enterHoaHandler = e => {
    // console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value})
};

    render() {
        // console.log(this.props)
        const { hoaname, maintenancefee, transferfee, refinancefee, resalecertfee, otherfees, mailingaddress } = this.state;
      return (
            <div>
                <User />
                <p>HOA Name</p>
                <input
                    value={this.state.hoaname}
                    onChange={this.enterHoaHandler}
                    type="text"
                    name="hoaname"
                />
                <p>Maintenance Fee</p>
                <input
                    value={this.state.maintenancefee}
                    onChange={this.enterHoaHandler}
                    type="number"
                    name="maintenancefee"
                />
                <p>Transfer Fee</p>
                <input
                    value={this.state.transferfee}
                    onChange={this.enterHoaHandler}
                    type="number"
                    name="transferfee"
                />
                <p>Refinance Fee</p>
                <input
                    value={this.state.refinancefee}
                    onChange={this.enterHoaHandler}
                    type="number"
                    name="refinancefee"
                />
                <p>Resale Certificate Fee</p>
                <input
                    value={this.state.resalecertfee}
                    onChange={this.enterHoaHandler}
                    type="number"
                    name="resalecertfee"
                />
                <p>Other Fees</p>
                <input
                    value={this.state.otherfees}
                    onChange={this.enterHoaHandler}
                    type="number"
                    name="otherfees"
                />
                <p>Mailing Address</p>
                <input
                    value={this.state.mailingaddress}
                    onChange={this.enterHoaHandler}
                    type="text"
                    name="mailingaddress"
                />
                <div>
                <button className="addHoa" onClick={ () => this.props.addHoaInfo(hoaname, maintenancefee, transferfee, refinancefee, resalecertfee, otherfees, mailingaddress)}>Add HOA</button>
                </div>
            </div>
      );
    }
  }

  const mapStateToProps = state => state;

  export default connect(mapStateToProps, {addHoaInfo})(Admin);