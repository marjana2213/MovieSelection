import React from 'react'
var Logo4 = require('../src/logos/logo4.png');

const Block = (props) => {
  const ModalFunc = () => {
    let modal = document.querySelector('#' + props.description_modal_id);
    modal.classList.add("open");
    modal.querySelector(".modal_close").classList.add("sn-section-item");

    document.querySelector("#button_down").classList.remove("sn-section-item");
    document.querySelector("#button_up").classList.remove("sn-section-item");
    let buttonsDes = document.getElementsByClassName('buttonDes_img')
    for(let i = 0; i < buttonsDes.length; i++) {
      buttonsDes[i].classList.remove("sn-section-item");
    }
  };

  return (
    <div className='square'>
      <img src={props.src} alt='' className='main_img'></img>
      <div className='buttonDes' onClick={ModalFunc}>
        <input type="image" className="buttonDes_img" src={Logo4} alt="" tabIndex={-1}/>
      </div>
    </div>
  )
}

export default Block