import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const BookDetails = () => {

  const params = useParams();
  const [movie, setMovie] = useState({});
  const imgpath = `http://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  
  useTitle(movie.title)

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a`);
      const json = await response.json();
      setMovie(json);
      console.log(json);
    }
    fetchMovie();
  }, [params.id]);

  return (
    <main className="flex-grow w-screen min-h-screen px-4 md:w-4/5 md:px-0 mx-auto">
      <section className="dark:text-gray-200 flex justify-around flex-wrap py-5 gap-3">
        <div>
          <img src={imgpath} alt={movie.title} className="w-full rounded-md" />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <p className="text-4xl font-bold my-3 text-center md:text-left">{movie.title}</p>
          <p className="text-gray-900 dark:text-gray-400 dark:md:text-gray-400 md:text-gray-900 text-sm my-3">{movie.overview}</p>
          <p className="flex flex-wrap gap-5 text-xs text-gray-400 my-3">
              {movie.genres && movie.genres.map((genre) => (
                <span className="border border-gray-400 py-2 px-4 rounded-md" key={genre.id}>{genre.name}</span>
              ))}
          </p>          
          <div className="flex items-center mt-6">
              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className="ms-2 text-lg font-bold text-gray-900 dark:text-white">{movie.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span className="text-lg font-medium text-gray-900 dark:text-white">{movie.vote_count} reviews</span>
          </div>
          <p className="font-bold my-3">Runtime: <span className="font-normal">{movie.runtime}</span></p>
          <p className="font-bold my-3">Budget: <span className="font-normal">{movie.budget}</span></p>
          <p className="font-bold my-3">Revenue: <span className="font-normal">{movie.revenue}</span></p>
          <p className="font-bold my-3">Release Date: <span className="font-normal">{movie.release_date}</span></p>
          <p className="font-bold my-3">IMDB Code: <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer" className="font-normal underline hover:text-yellow-400">{movie.imdb_id}</a></p>
        </div>
      </section>
    </main>
  )
}

