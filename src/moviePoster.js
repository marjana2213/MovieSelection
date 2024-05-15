import React from 'react';
import Header from "./Header";
import Block from "./Block";
import ThumbsUp from "./ThumbsUp";
import ThumbsDown from "./ThumbsDown";
import DescriptionModal from "./DescriptionModal"
import './index.css';

function MoviePosters(props) {
  return (
    <div>
      <Header/>
        <div className="container">
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