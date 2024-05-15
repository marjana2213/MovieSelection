import React from 'react'
var Logo2 = require('../src/logos/logo2.png');

const ThumbsDown = (props) => {
  return (
    <div className='button'>
      <button onClick={props.onClick}><img src={Logo2} alt=''></img></button>
    </div>
  )
}

export default ThumbsDown
