import data from '../../articles.json'

function Home() {
    return ( 
<>

<input className= "border-transparent m-6 p-2 bg-clarinho rounded-full border-3 placeholder-white" type="text" id="buscar" placeholder='Digite sua busca'/>
<hr className="h-px m-2 border-0 bg-roxinho p-0"></hr>
<h1 className='font-bold text-roxinho text-xl p-3 m-3 ms-8'>Últimas noticias</h1>
<div className='grid grid-cols-3 gap-4 space-x-6'>

    
            {
                data.map( (artigo, index) => (

                    <div className=' px-6 py-4 m-4 max-w-sm rounded overflow-hidden shadow-lg ms-8 bg-clarinho card ml-8' key={index}>
                    <img className="w-full mb-4" src={artigo.image} />
                    <h2 className='m-3 text-center ms-1 font-bold text-lg mb-2'>{artigo.title}</h2>

                    <div className='texto m-3 text-base text-left'>
                    {artigo.noticia.map( (paragrafo,index) => (
                    <p className="text-gray-700 text-base" key={index}>{paragrafo}</p>
                    )
                  )
                }
            
   </div>
</div>
        )
    )
}
</div>
</>
    );
}
 
export default Home ;
