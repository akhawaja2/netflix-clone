//component so Row is capitalized
import React, {useState, useEffect} from 'react'
//axios is an alias for our exported request
import axios from './axios';
import './Row.css';
const base_url = "https://image.tmdb.org/t/p/original/";
//props = title. props stands for properties
//state = short term memory
function Row({title, fetchUrl, isLargeRow }) {
    //Creating empty movies array. when row loads we pull info
    const [movies, setMovies] = useState([]);

    //a snippet of code which runs based on specific condition/variable
    //React has useEffect hook
    //
    useEffect(() => {
        async function fetchData() {
            //ex: https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        //Since its async request have to define it then call it after   
        fetchData();
        //If [] is empty, run 1 time when row loads and dont run again
        //Since we use fetchUrl as a dependency 
        //have to add it into the [] so it updates on change
    }, [fetchUrl]);

    console.log(movies);
    
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className ="row_posters">
                {/*several row posters*/}
                {movies.map(movie => (
                    <img 
                    key = {movie.id}
                    className = {`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src ={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>
                ))}
            </div>
            {/* container -> posters*/}
        </div>
    )
}

export default Row