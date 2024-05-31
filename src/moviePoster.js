import React from 'react';
import Header from "./Header";
import Block from "./Block";
import ThumbsUp from "./ThumbsUp";
import ThumbsDown from "./ThumbsDown";
import DescriptionModal from "./DescriptionModal"
import './index.css';
import { useSpatnavInitialization, useSection } from '@salutejs/spatial';

const CloseStartModal = () => {
  let buttons = document.getElementsByClassName('modal_close')
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].blur();
  }
  
  document.querySelector('#start_modal').classList.remove("open");
};

function MoviePosters(props) {
  useSpatnavInitialization();
  const [sectionProps] = useSection('sectionFirst');

  return (
    <div {...sectionProps}>
      <Header/>
      <div className="container">
        <div className="modal open" id="start_modal">
          <div className="modal_box" id="modal_box">
            <button className="sn-section-item modal_close" onClick={CloseStartModal} tabIndex={-1}></button>
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