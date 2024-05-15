import MoviePosters from './moviePoster'
import { addMovie } from './AddMovie'
import React, { useState, useEffect } from 'react'


function App() {
    const [films,setFilms] = useState([]);
    const [upIndex, setUpIndex] = useState(0);
    const [downIndex, setDownIndex] = useState(1);

    useEffect(() => {
        addMovie(2).then((newFilms) => {
            setFilms(newFilms);
            addMovie(10).then((newFilms) => {
                setFilms(films.concat(newFilms));
            })
        })
    }, []);
    
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