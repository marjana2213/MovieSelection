import React from 'react'
var CancleImg = require('../src/logos/cancel.png');

const DescriptionModal = (props) => {
  const ModalFunc = () => {
    let modal = document.querySelector('#' + props.modal_id);
    modal.classList.remove("open");
    modal.querySelector('.modal_close').classList.remove("sn-section-item");

    document.querySelector("#button_down").classList.add("sn-section-item");
    document.querySelector("#button_up").classList.add("sn-section-item");
    let buttonsDes = document.getElementsByClassName('buttonDes_img')
    for(let i = 0; i < buttonsDes.length; i++) {
      buttonsDes[i].classList.add("sn-section-item");
    }
  };

  return (
    <div className="modal" id={props.modal_id}>
      <div className="modal_box" id="modal_box">
        <input type='image' className="modal_close" onClick={ModalFunc} src={CancleImg} alt="" tabIndex={-1}/>
        <h2>{props.film_name}</h2>
        <p>{props.text_description}</p>   
      </div>
    </div>
  )
}

export default DescriptionModal