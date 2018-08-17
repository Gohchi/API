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
            sortBy={this.props.pager.sort}
            sortList={this.props.sortList}
            prevPage={this.props.prevPage}
            nextPage={this.props.nextPage}
            currentPage={this.props.pager.current}
          />
        </div>
      </div>
    );
  }
}

export default Tbar;
