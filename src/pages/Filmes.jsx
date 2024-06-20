import { useEffect, useState} from 'react'
import {Link} from 'react-router-dom'


function Filmes() {

    const[filmes,setFilmes]= useState([])

    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
    .then(response => response.json())
    .then(response => setFilmes(response.results))
    .catch(erro => console.json(erro))

    useEffect(() => {

        fetch(`${urlBase}popular?${apiKey}`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(erro => console.log(erro))


    },[])
    
    return (
        <>
       
        <h1 className='font-bold text-roxinho text-xl p-3 pt-7 m-3 ms-8'>Filmes Populares</h1>
        <div className="container mx-auto p-4">
          <div className="listaFilmes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {filmes.map(filme => (
              <Link to={`${filme.id}`} className="card-filme relative overflow-hidden rounded-lg shadow-lg group block w-full" key={filme.id}>
                <img src={`${urlImg}${filme.poster_path}`} alt={filme.title} className="w-full transition-transform transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-clarinho bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                </div>
                <h1 className="text-center font-bold text-lg group-hover:text-roxinho transition-colors duration-300 mt-5 mb-5">{filme.title}</h1>
              </Link>
            ))}
          </div>
        </div> 
        </>
      );
    }

export default Filmes ;