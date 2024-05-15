import React from 'react'
var Logo = require('../src/logos/logo.png');

const ThumbsUp = (props) => {
  return (
    <div className='button'>
      <button onClick={props.onClick}><img src={Logo} alt =''></img></button>
    </div>
  )
}

export default ThumbsUp
