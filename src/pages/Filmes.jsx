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
        <input className= "border-transparent m-6 p-2 bg-clarinho rounded-full border-3 placeholder-white" type="text" id="buscar" placeholder='Digite sua busca'/>
        <hr className="h-px m-2 border-0 bg-roxinho p-0 mb-9 "></hr>
        <div className="listaFilmes grid grid-cols-3 gap-4">
            {
                filmes.map(filme => (
                    <div className="card-filme" key={filme.id}>
                        <img src={`${urlImg}${filme.poster_path}`}/>
                        <h1>{filme.title}</h1>
                        <Link className="bg-blue-500" to={`${filme.id}`}>Saber Mais</Link>

                    </div>
                ))
            }
        </div>
        </>
     );
     
}

export default Filmes ;