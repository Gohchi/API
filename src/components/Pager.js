import React from 'react';

function Pager(props) {
  return (            
    <div className="tbar-item">
      {props.showing} of {props.total} products   
    </div>
  )
}

export default Pager;