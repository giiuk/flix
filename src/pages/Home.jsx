import data from '../../articles.json'

function Home() {
    return ( 
<>
   <h1 className='font-bold text-roxinho text-xl p-3 pt-7 m-3 ms-8 '>Últimas notícias</h1>
   <div className='container mx-auto'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center'>
      {data.map((artigo, index) => (
        <div className='px-6 py-4 m-4 max-w-sm rounded overflow-hidden shadow-lg bg-clarinho card' key={index}>
          <img className="w-full mb-4" src={artigo.image} />
          <h2 className='m-3 text-center font-bold text-lg mb-2'>{artigo.title}</h2>
          <div className='texto m-3 text-base text-left'>
            {artigo.noticia.map((paragrafo, index) => (
              <p className="text-gray-700 text-base" key={index}>{paragrafo}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</>

    );
}
 
export default Home ;
