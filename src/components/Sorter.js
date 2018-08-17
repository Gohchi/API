import React, { Component } from 'react';
import PageChanger from "./PageChanger";
import './Sorter.css';

class Sorter extends Component {
  render() {
    let sortBy = this.props.pager.sort;
    return (            
      <div className="sorter">
        <div className="tbar-item">Sort by:</div>
        <ul className="sorters">
          <li>
            <PageChanger
              prevPage={this.props.prevPage}
              nextPage={this.props.nextPage}
              pager={this.props.pager}
            />
          </li>
          <li><div
            className={"s-button" + (sortBy==="HighestPrice"?" active":"")}
            onClick={() => this.props.sortList("HighestPrice")}
          >Highest price</div></li>
          <li><div
            className={"s-button" + (sortBy==="LowestPrice"?" active":"")}
            onClick={() => this.props.sortList("LowestPrice")}
          >Lowest price</div></li>
          <li><div
            className={"s-button" + (sortBy==="MostRecent"?" active":"")}
            onClick={() => this.props.sortList("MostRecent")}
          >Most recent</div></li>
        </ul>
      </div>
    );
  }
}

export default Sorter;