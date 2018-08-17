import React, { Component } from 'react';
import Pager from "./Pager";
import Sorter from "./Sorter";
import './Tbar.css';

class Tbar extends Component {
  render() {
    return (
      <div className="tbar">
        <div className="container">
          <Pager showing={this.props.showing} total={this.props.pager.total} />
          <div className="separator"></div>
          <Sorter
            sortList={this.props.sortList}
            prevPage={this.props.prevPage}
            nextPage={this.props.nextPage}
            pager={this.props.pager}
          />
        </div>
      </div>
    );
  }
}

export default Tbar;
