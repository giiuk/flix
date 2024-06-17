import data from '../../articles.json'

function Home() {
    return ( 
<>
<input className=  "border-transparent m-5 p-1 bg-clarinho rounded-full border-3 placeholder-white" type="text" id="buscar" placeholder='Digite sua busca' />
<hr className="h-px m-3 border-0 bg-roxinho p-0"></hr>
<div className='grid grid-cols-3 gap-4'>
            {
                data.map( (artigo, index) => (
                    <div className='card' key={index}>
                    <h2>{artigo.title}</h2>
                    <img className="mb-2" src={artigo.image} alt={artigo.title} />
                    <div className='tags'>
                    {artigo.tags.map( (tag, index) => (
                    <span className="bg-purple-600 p-1 m-1 rounded" key={index}>{tag}</span>
                )
            )
        }
</div>
    <div className='texto'>
    {artigo.text.map( (paragrafo,index) => (
    <p key={index}>{paragrafo}</p>
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
