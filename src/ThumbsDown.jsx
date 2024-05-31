import React from 'react'
var Logo2 = require('../src/logos/logo2.png');

const ThumbsDown = (props) => {
  return (
    <div className='button'>
      <input type="image" className="sn-section-item" onClick={props.onClick} tabIndex={-1} src={Logo2} alt=""/>
    </div>
  )
}

export default ThumbsDown
