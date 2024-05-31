import React from 'react'

const DescriptionModal = (props) => {
  const ModalFunc = () => {
    let buttons = document.getElementsByClassName('modal_close')
    for(let i = 0; i < buttons.length; i++) {
      buttons[i].blur();
    }
    
    document.querySelector('#' + props.modal_id).classList.remove("open");
  };

  return (
    <div className="modal" id={props.modal_id}>
      <div className="modal_box" id="modal_box">
        <button className="sn-section-item modal_close" onClick={ModalFunc} tabIndex={-1}></button>
        <h2>{props.film_name}</h2>
        <p>{props.text_description}</p>   
      </div>
    </div>
  )
}

export default DescriptionModal