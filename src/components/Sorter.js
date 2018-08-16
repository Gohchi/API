import React, { Component } from 'react';
import './Sorter.css';

class Sorter extends Component {
  render() {
    let active = "MostRecent";
    return (            
      <div className="sorter">
        <div className="tbar-item">Sort by:</div>
        <ul className="sorters">
          <li><div className={active==="HighestPrice"?"active":""} >Highest price</div></li>
          <li><div className={active==="LowestPrice"?"active":""} >Lowest price</div></li>
          <li><div className={active==="MostRecent"?"active":""} >Most recent</div></li>
        </ul>
      </div>
    );
  }
}

export default Sorter;