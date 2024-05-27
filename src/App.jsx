import MoviePosters from './moviePoster'
import { addMovie } from './AddMovie'
import React, { useState, useEffect } from 'react';

import {
    createAssistant
} from "@sberdevices/assistant-client"

const initializeAssistant = (getState) => {
    return createAssistant({getState});
};

function App() {
    const [films,setFilms] = useState([]);
    const [upIndex, setUpIndex] = useState(0);
    const [downIndex, setDownIndex] = useState(1);

    const helloText = "Добро пожаловать в приложение Movie Selection: This One or That One! Вы можете найти фильм по душе, выбрав один из двух предложенных фильмов, основываясь на описании, названии или постере. После выбора фильм остается доступным, а другой фильм меняется на новый. Начните выбирать прямо сейчас!";

    const assistant = initializeAssistant(() => {});

    useEffect(() => {
        assistant.sendData({action: {action_id: "PRINT_TEXT", parameters: {text: helloText}}});

        addMovie(2).then((newFilms) => {
            setFilms(newFilms);
            addMovie(10).then((newFilms) => {
                setFilms(films.concat(newFilms));
            })
        })
    }, []);

    assistant.on("data", ({action}) => {
        if(action == "choose 1") {
            handleDownClick();
        } else if (action == "choose 2") {
            handleUpClick();
        } else if (action == "get name 1") {
            assistant.sendData({action: {action_id: "PRINT_TEXT", parameters: {text: films[upIndex].name !== null ? films[upIndex].name : "Фильм 1"}}});
        } else if (action == "get name 2") {
            assistant.sendData({action: {action_id: "PRINT_TEXT", parameters: {text: films[downIndex].name !== null ? films[downIndex].name : "Фильм 2"}}});
        } else if (action == "get description 1") {
            assistant.sendData({action: {action_id: "PRINT_TEXT", parameters: {text: films[upIndex].description}}});
        } else if (action == "get description 2") {
            assistant.sendData({action: {action_id: "PRINT_TEXT", parameters: {text: films[downIndex].description}}});
        }
    });
    
    const handleUpClick = () => {
        let index = Math.max(upIndex, downIndex);
        index += 1;
        setUpIndex(index);
        addMovie(1).then((newFilms) => {
            setFilms(films.concat(newFilms));
        });
    };

    const handleDownClick = () => {
        let index = Math.max(upIndex, downIndex);
        index += 1;
        setDownIndex(index);
        addMovie(1).then((newFilms) => {
            setFilms(films.concat(newFilms));
        });
    };

    return (
    <div>
    {films.length > 0 ? (
        <MoviePosters
            src1={films[upIndex].poster.url}
            src2={films[downIndex].poster.url}
            onUpClick={handleUpClick}
            onDownClick={handleDownClick}
            name1={films[upIndex].name !== null ? films[upIndex].name : "Фильм 1"}
            name2={films[downIndex].name !== null ? films[downIndex].name : "Фильм 2"}
            desc1={films[upIndex].description}
            desc2={films[downIndex].description}
            helloModalText={helloText}
        />
    ) : (
        <div className='load_back'>
            <p>Loading...</p>
        </div>
    )}
    </div>
  );
}

export default App;