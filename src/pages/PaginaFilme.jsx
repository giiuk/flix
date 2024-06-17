import { useParams } from "react-router-dom";
import { useState, useEffect} from 'react'

function PaginaFilme () {

    const {id} = useParams();

    const apiKey='api_key=61f385026459ccb45e5ad856573ed773'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w1280/'


    const [filme, setFilme] = useState([])

    useEffect(() => {

        fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(erro => console.log(erro))
    },[])


    

    return ( 
       <>
        <h1> Detalhes do Filme</h1>
        <img src={`${urlImg}${filme.backdrop_path}`}/>
         <p>{filme.title}</p>
         <p>{filme.overview}</p>
         <p>{filme.vote_average}</p>
        </>

     );
}

export default PaginaFilme;