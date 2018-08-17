import React, { Component } from 'react';
import './PageChanger.css';

class PageChanger extends Component {
  render() {
    let pager = this.props.pager;
    return (
      <div className="page-changer">
        {
          pager.current > 1 ? 
          <div
            className="prev"
            onClick={() => this.props.prevPage()}
            title="Previous page"
          ></div>
          : <div className="empty"></div>
        }
        { 
          pager.size * pager.current < pager.total ?
          <div
            className="next"
            onClick={() => this.props.nextPage()}
            title="Next page"
          ></div>
          : <div className="empty"></div>
        }
      </div>
    );
  }
}

export default PageChanger;
