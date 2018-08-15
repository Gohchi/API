import React, { Component } from 'react';
import './UserData.css';
import coin from '../image/icon/coin.svg';
import aerolab from '../image/icon/aerolab-logo.svg';

class UserData extends Component {
  render() {
    return (            
      <div className="inlineblock">
        <ul className="user-data">
          <li>
            <div className="points">
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
