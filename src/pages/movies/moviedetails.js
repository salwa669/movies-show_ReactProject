import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from '../../axios config/axiosinstance';

const MovieDetails=(props)=>{
    const[movie,setmovie]=useState({})
    const params=useParams();

    useEffect(()=>{
axiosInstance.get(`3/movie/${params.id}?api_key=e94fd775bd8f7a3e89286958d01fbd99`).then((res)=>{console.log(res.data);setmovie(res.data)}).catch((err)=>{console.log(err)
})
    },[])

    return(
        <>
       
    <div>
      {/* <h1>Product details {params.id}</h1> */}
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
        <p>{movie.overview}</p>
    </div>

        </>
    )
}
export default MovieDetails;