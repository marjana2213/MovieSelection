import React from 'react'
var Logo = require('../src/logos/logo.png');

const ThumbsUp = (props) => {
  return (
    <div className='button'>
      <input type="image" id="button_up" className="" onClick={props.onClick} src={Logo} alt="" tabIndex={-1}/>
    </div>
  )
}

export default ThumbsUp
