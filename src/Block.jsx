import React from 'react'
var Logo4 = require('../src/logos/logo4.png');

const Block = (props) => {
  const ModalFunc = () => {
    document.querySelector('#' + props.description_modal_id).classList.add("open");
  };
  
  return (
    <div className='square'>
      <img src={props.src} alt='' className='main_img'></img>
      <div className='buttonDes' onClick={ModalFunc}>
        <img src={Logo4} alt='' className='buttonDes_img'></img>
      </div>
    </div>
  )
}

export default Block