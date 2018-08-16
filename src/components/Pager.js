import React, { Component } from 'react';

class Pager extends Component {
  render() {
    return (            
      <div className="tbar-item">
        {this.props.showing} of {this.props.total} products   
      </div>
    );
  }
}

export default Pager;