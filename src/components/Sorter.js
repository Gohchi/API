import React, { Component } from 'react';
import './Sorter.css';

class Sorter extends Component {
  render() {
    let sortBy = this.props.sortBy;
    return (            
      <div className="sorter">
        <div className="tbar-item">Sort by:</div>
        <ul className="sorters">
          <li><div
            className={sortBy==="HighestPrice"?"active":""}
            onClick={() => this.props.sortList("HighestPrice")}
          >Highest price</div></li>
          <li><div
            className={sortBy==="LowestPrice"?"active":""}
            onClick={() => this.props.sortList("LowestPrice")}
          >Lowest price</div></li>
          <li><div
            className={sortBy==="MostRecent"?"active":""}
            onClick={() => this.props.sortList("MostRecent")}
          >Most recent</div></li>
        </ul>
      </div>
    );
  }
}

export default Sorter;