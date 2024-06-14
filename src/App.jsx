import MoviePosters from './moviePoster'
import { addMovie } from './AddMovie'
import React, { useState, useEffect } from 'react';
import { useSpatnavInitialization } from '@salutejs/spatial';
import { createAssistant } from "@sberdevices/assistant-client"

function App() {
    const [films,setFilms] = useState([]);
    const [upIndex, setUpIndex] = useState(0);
    const [downIndex, setDownIndex] = useState(1);

    const helloTextOfficial = "Добро пожаловать в приложение Movie Battle! Вы можете найти фильм по душе, выбрав один из двух предложенных фильмов, основываясь на описании, названии или постере. После выбора фильм остается доступным, а другой фильм меняется на новый. Для того, чтобы увидеть описание фильма - нажмите на кнопку в виде пачки попкорна. Начните выбирать прямо сейчас!";
    //const helloTextNoOfficial = "Привет. Ты в приложении Movie Battle! Тут ты можешь найти фильм по душе, выбрав один из двух предложенных фильмов, основываясь на описании, названии или постере. После выбора фильм остается доступным, а другой фильм меняется на новый. Для того, чтобы увидеть описание фильма - нажми на кнопку в виде пачки попкорна. Начни выбирать прямо сейчас!";

    useEffect(() => {
        let tempFilms = [];
        addMovie(2).then((newFilms) => {
            tempFilms.push(...newFilms);
            addMovie(10).then((newFilms2) => {
                tempFilms.push(...newFilms2);
                setFilms(tempFilms);
            })
        })
    }, []);

    const initializeAssistant = (getState) => {
        return createAssistant({getState});
    };

    const assistant = initializeAssistant(() => {});

    assistant.on("data", ({action}) => {
        if(action === "choose 1") {
            handleDownClick();
        }
        if (action === "choose 2") {
            handleUpClick();
        }
        if (action === "get name 1") {
            assistant.sendData(
                {
                    action: {
                        action_id: "PRINT_TEXT", 
                        parameters: {
                            textOfficial: films[upIndex].name !== null ? films[upIndex].name : "Фильм 1", 
                            textNoOfficial: films[upIndex].name !== null ? films[upIndex].name : "Фильм 1"
                        }
                    }
                }
            );
        }
        if (action === "get name 2") {
            assistant.sendData(
                {
                    action: {
                        action_id: "PRINT_TEXT", 
                        parameters: {
                            textOfficial: films[downIndex].name !== null ? films[downIndex].name : "Фильм 2", 
                            textNoOfficial: films[downIndex].name !== null ? films[downIndex].name : "Фильм 2"
                        }
                    }
                }
            );
        }
        if (action === "get description 1") {
            assistant.sendData(
                {
                    action: {
                        action_id: "PRINT_TEXT", 
                        parameters: {
                            textOfficial: films[upIndex].description, 
                            textNoOfficial: films[upIndex].description
                        }
                    }
                }
            );
        }
        if (action === "get description 2") {
            assistant.sendData(
                {
                    action: {
                        action_id: "PRINT_TEXT", 
                        parameters: {
                            textOfficial: films[downIndex].description, 
                            textNoOfficial: films[downIndex].description
                        }
                    }
                }
            );
        }
    });

    window.addEventListener('keydown', (event) => {
        switch(event.code) {
            case 'ArrowDown':
                
                break;
            case 'ArrowUp':
                
                break;
            case 'ArrowLeft':
                
                break;
            case 'ArrowRight':
                
                break;
            case 'Escape':
                closeAllModal();
                break;
            case 'Enter':
                
                break;
            default:
                break;
        }
    });

    const closeAllModal = () => {
        let modals = document.getElementsByClassName('modal');
        for(let i = 0; i < modals.length; i++) {
            modals[i].classList.remove("open");
        }
    };
    
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

    useSpatnavInitialization();

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
            helloModalText={helloTextOfficial}
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