import { useParams } from "react-router-dom";
import { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

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
        <div className="p-4">  
        <div className="flex items-center mb-6">
        <Link to="/filmes">
          <img src="/setinha.png" className="mr-5 h-7 w-4 " alt="Voltar" />
        </Link>
        <h1 className="text-xl font-bold text-roxinho">Detalhes do Filme</h1>
        </div>
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-[292px] h-[438px] mb-4 md:mb-0 md:mr-6 ">
              <img 
                src={`${urlImg}${filme.poster_path}`}
                alt={filme.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-5">{filme.title}</h2>
              <p className="text-lg mb-5"><strong>Data de Lançamento:</strong> {filme.release_date}</p> 
            <p className="text-lg mb-5"><strong>Duração:</strong> {filme.runtime} minutos</p>
              <p className="text-lg mb-5"><strong>Direção:</strong> {filme.director}N/A</p>
            
              <p className="text-lg mb-4" ><strong className="mt-6 ">Nota:</strong> <img src="/estrelas.png" className="mt-2" alt="" /></p>
              <img src="/salvar.png" className="h-7 w-6 ml-1 mb-4 mt-7" alt="" />
              <strong className="mt-3 text-lg mb-4">Sinopse:</strong>
              <p className="mt-2">{filme.overview}</p>
            </div>
          </div>
        </div>
      );
}

export default PaginaFilme;