import React from 'react';
import Header from "./Header";
import Block from "./Block";
import ThumbsUp from "./ThumbsUp";
import ThumbsDown from "./ThumbsDown";
import DescriptionModal from "./DescriptionModal"
import './index.css';
import { useSpatnavInitialization, useSection } from '@salutejs/spatial';

var CancleImg = require('../src/logos/cancel.png');

const CloseStartModal = () => {
  let buttons = document.getElementsByClassName('modal_close')
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].blur();
  }
  
  let modal = document.querySelector('#start_modal');
  modal.classList.remove("open");
  modal.querySelector('.modal_close').classList.remove("sn-section-item");

  document.querySelector("#button_down").classList.add("sn-section-item");
  document.querySelector("#button_up").classList.add("sn-section-item");
  let buttonsDes = document.getElementsByClassName('buttonDes_img')
  for(let i = 0; i < buttonsDes.length; i++) {
    buttonsDes[i].classList.add("sn-section-item");
  }
};

function MoviePosters(props) {
  const [sectionMain] = useSection('sectionMain');
  
  return (
    <div {...sectionMain}>
      <Header/>
      <div className="container">
        <div className="modal open" id="start_modal">
          <div className="modal_box" id="modal_box">
            <input type='image' className="sn-section-item modal_close" onClick={CloseStartModal} src={CancleImg} alt="" tabIndex={-1}/>
            <h2>Добро пожаловать!</h2>
            <p>{props.helloModalText}</p>
          </div>
        </div>
        <Block description_modal_id="modal_1" src={props.src1}/>
        <DescriptionModal modal_id='modal_1' film_name={props.name1} text_description={props.desc1}/>
        <div className="container_button">
          <ThumbsUp onClick={props.onUpClick}/>
          <ThumbsDown onClick={props.onDownClick}/>
        </div>
        <Block description_modal_id="modal_2" src={props.src2}/>
        <DescriptionModal modal_id='modal_2' film_name={props.name2} text_description={props.desc2}/>
      </div>
    </div>
  );
};

export default MoviePosters;