import axiosInstance from "../../axios config/axiosinstance";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const Movie=()=>{
const[movies,setmovie]=useState([]);
const[page,setpage]=useState(1);
useEffect(()=>{
    axiosInstance.get(`3/movie/popular?api_key=e94fd775bd8f7a3e89286958d01fbd99&page=${page}`).then((res)=>{console.log(res.data.results);setmovie(res.data.results)}).catch((err)=>{console.log(err)})

},[page])


return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4">

       
       
        
        {movies.map((movie) => {
          return (
            <div className="col" key={movie.id}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  style={{ height: "300px" }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                 
                  <Link to={`/details/${movie.id}`}>Details</Link>
                </div>
              </div>
             
            </div>
          );
        })}
     
      </div><br></br>
      <div className="d-flex justify-content-between">
    <button className="btn btn-primary" onClick={()=>setpage(page-1)}>Previous</button>
    <button className="btn btn-primary" onClick={()=>setpage(page+1)}>Next</button>
   </div>
    </>
  );
}

export default Movie;