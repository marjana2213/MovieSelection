import React from 'react'
var Logo2 = require('../src/logos/logo2.png');

const ThumbsDown = (props) => {
  return (
    <div className='button'>
      <input type="image" id="button_down" className="" onClick={props.onClick} src={Logo2} alt="" tabIndex={-1}/>
    </div>
  )
}

export default ThumbsDown
