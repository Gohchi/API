import React, { Component } from 'react';
import './UserData.css';
import coin from '../image/icon/coin.svg';
import aerolab from '../image/icon/aerolab-logo.svg';

class UserData extends Component {
  constructor(props){
    super(props)
    this.state = {
      hidden: true
    }
  }
  showMenu(){
    this.setState({
      hidden: !this.state.hidden
    })
  }
  addPoints(amount){
    this.props.addPoints(amount)
    this.setState({
      hidden: true
    })
  }
  render() {
    return (            
      <div className="inlineblock">
        <ul className={"menu" + (this.state.hidden ? " hidden" : "")}>
          <li onClick={() => this.addPoints(7500)} >
            <div className="points"><div>Add 7500 points</div></div>
          </li>
          <li onClick={() => this.addPoints(5000)} >
            <div className="points"><div>Add 5000 points</div></div>
          </li>
          <li onClick={() => this.addPoints(1000)} >
            <div className="points"><div>Add 1000 points</div></div>
          </li>
          <li onClick={() => this.props.showHistory()} >
            <div className="points"><div>Check history</div></div>
          </li>
        </ul>
        <ul className="user-data">
          <li>
            <div
              className="points"
              title="Click to show options"
              onClick={() => this.showMenu()}
            >
              <div>{this.props.points}</div>
              <img src={coin} alt="points" />
            </div>
          </li>
          <li><div className="name">{this.props.name}</div></li>
        </ul>
        <img src={aerolab} className="aerolab" alt="aerolab" />    
      </div>
    );
  }
}

export default UserData;