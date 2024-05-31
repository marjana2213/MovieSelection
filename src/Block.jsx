import React from 'react'
var Logo4 = require('../src/logos/logo4.png');

const Block = (props) => {
  const ModalFunc = () => {
    let buttons = document.getElementsByClassName('buttonDes_img')
    for(let i = 0; i < buttons.length; i++) {
      buttons[i].blur();
    }
    
    document.querySelector('#' + props.description_modal_id).classList.add("open");
  };
  
  return (
    <div className='square'>
      <img src={props.src} alt='' className='main_img'></img>
      <div className='buttonDes' onClick={ModalFunc}>
        <input type="image" className="sn-section-item buttonDes_img" tabIndex={-1} src={Logo4} alt=""/>
      </div>
    </div>
  )
}

export default Block