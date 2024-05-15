import React from 'react'

const DescriptionModal = (props) => {
  const ModalFunc = () => {
    document.querySelector('#' + props.modal_id).classList.remove("open");
  };

  return (
    <div className="modal" id={props.modal_id}>
      <div className="modal_box" id="modal_box">
        <div className="modal_close" onClick={ModalFunc}></div>
        <h2>{props.film_name}</h2>
        <p>{props.text_description}</p>
      </div>
    </div>
  )
}

export default DescriptionModal