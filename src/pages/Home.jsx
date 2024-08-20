import { useState } from 'react';
import data from '../../articles.json';

function Home() {
      
    const [searchInput, setSearchInput] = useState('');
    const [articles, setArticles] = useState(data);
        
    const handleInputChange = e => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);
            
        const resultados = data.filter((search) =>
          search.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
            
        setArticles(resultados);
    };

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

            <h1 className='font-bold text-roxinho text-xl p-3 pt-7 m-3 ms-8'>Últimas notícias</h1>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center'>
                    {articles.length > 0 ? 
                        articles.map((artigo, index) => (
                            <div className='px-6 py-4 m-4 max-w-sm rounded overflow-hidden shadow-lg bg-clarinho card' key={index}>
                                <img className="w-full mb-4" src={artigo.image} alt={artigo.title}/>
                                <h2 className='m-3 text-center font-bold text-lg mb-2'>{artigo.title}</h2>
                                <div className='texto m-3 text-base text-left'>
                                    {artigo.noticia.map((paragrafo, i) => (
                                        <p className="text-gray-700 text-base" key={i}>{paragrafo}</p>
                                    ))}
                                </div>
                            </div>
                        ))
                        :
                        <p className='text-xl col-span-3 mt-4 font-bold mx-auto text-center text-roxinho'>Nenhum Artigo Encontrado 😔👎 </p>
                    }
                </div>
            </div>
        </>
    );
}

export default Home;
