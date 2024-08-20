import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Filmes() {
  const [filmes, setFilmes] = useState([])
  const [artigos, setArtigos] = useState([])
  const [searchInput, setSearchInput] = useState('')

  const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
  const urlBase = 'https://api.themoviedb.org/3/movie/'
  const urlImg = 'https://image.tmdb.org/t/p/w342/'

  useEffect(() => {
    fetch(`${urlBase}popular?${apiKey}`)
      .then(response => response.json())
      .then(response => {
        setFilmes(response.results)
        setArtigos(response.results)
      })
      .catch(erro => console.log(erro))
  }, [])

  const handleInputChange = e => {
    const searchTerm = e.target.value
    setSearchInput(searchTerm)

    const resultados = filmes.filter((search) =>
      search.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setArtigos(resultados)
  }

  return (
    <>
      <input 
        className="border-transparent px-6 m-6 p-2 bg-clarinho rounded-full border-3 placeholder-white" 
        type="text"
        name="buscar" 
        id="buscar" 
        value={searchInput}
        placeholder="Digite sua busca"
        onChange={handleInputChange}
      />
     
     <hr className="h-px m-2 border-0 bg-roxinho p-0"></hr>

      <h1 className='font-bold text-roxinho text-xl p-3 pt-7 m-3 ms-8'>Filmes Populares</h1>
      <div className="container mx-auto p-4">
        <div className="listaFilmes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {artigos.length > 0 ? (
            artigos.map(filme => (
              <Link to={`${filme.id}`} className="card-filme relative overflow-hidden rounded-lg shadow-lg group block w-full" key={filme.id}>
                <img src={`${urlImg}${filme.poster_path}`} alt={filme.title} className="w-full transition-transform transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-clarinho bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                </div>
                <h1 className="text-center font-bold text-lg group-hover:text-roxinho transition-colors duration-300 mt-5 mb-5">{filme.title}</h1>
              </Link>
            ))
          ) 
          : 
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center">
            <p className='text-xl mt-4 font-bold text-center text-roxinho'>Nenhum Filme Encontrado 😔👎</p>
          </div>
          }
        </div>
      </div> 
    </>
  )
}

export default Filmes