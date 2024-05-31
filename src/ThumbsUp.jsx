import React from 'react'
var Logo = require('../src/logos/logo.png');

const ThumbsUp = (props) => {
  return (
    <div className='button'>
      <input type="image" className="sn-section-item" onClick={props.onClick} tabIndex={-1} src={Logo} alt=""/>
    </div>
  )
}

export default ThumbsUp
