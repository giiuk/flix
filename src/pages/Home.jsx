import data from '../../articles.json'

function Home() {
    return ( 
<>
<input className= "border-transparent m-6 p-2 bg-clarinho rounded-full border-3 placeholder-white" type="text" id="buscar" placeholder='Digite sua busca'/>
<hr className="h-px m-2 border-0 bg-roxinho p-0"></hr>

<h1 className='font-bold text-roxinho text-xl p-3 m-3 ms-8'>Últimas Noticias</h1>

<div className='flex m-4'>
<div className="max-w-sm rounded overflow-hidden shadow-lg ms-8 bg-clarinho">
  <div className="px-6 py-4">
    <img className="w-full mb-4" src="/chicobento.jpg" alt="" />
    <div className="font-bold text-xl mb-2">Chico Bento: Isaac Amendoim aparece como o adorado personagem da Turma da Mônica em novo pôster de live-action</div>
    <p className="text-gray-700 text-base">
      Um dos personagens mais queridos da turma de Mauricio de Sousa está prestes a chegar aos cinemas, com data de estreia já definida.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mt-6">segunda feira, 17 de junho</span>
    
  </div>
</div>

<div className="max-w-sm rounded overflow-hidden shadow-lg ms-8 bg-clarinho">
  <div className="px-6 py-4">
    <img className="w-full mb-4" src="/maxxine.webp" alt="" />
    <div className="font-bold text-xl mb-2">MaXXXine: Filme de terror com Mia Goth é baseado em história real?</div>
    <p className="text-gray-700 text-base">
    Terceiro e último episódio da saga do diretor Ti West, MaXXXine dará uma volta na linha do tempo, ambientando a trama na Hollywood de 1985.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-14">domingo, 16 de junho</span>
  </div>
</div>

<div className="max-w-sm rounded overflow-hidden shadow-lg ms-8 bg-clarinho">
  <div className="px-6 py-4">
    <img className="w-full mb-4 " src="/clint.webp" alt="" />
    <div className="font-bold text-xl mb-2">Segundo Clint Eastwood, esse é o melhor faroeste da história do cinema: “Foi o primeiro filme de faroeste que me surpreendeu”</div>
    <p className="text-gray-700 text-base">
    Eastwood é um titã do faroeste. Mas ele também adora o gênero como espectador. Um de seus filmes favoritos tem agora 81 anos e está quase esquecido.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">sábado, 15 de junho</span>

        </div>
    </div>
</div>

<div className='flex m-4 mt-3'>
<div className="max-w-sm rounded overflow-hidden shadow-lg ms-8 bg-clarinho">
  <div className="px-6 py-4">
    <img className="w-full mb-4" src="/resident.webp" alt="" />
    <div className="font-bold text-xl mb-2">"Resident Evil é muito bem feito": James Cameron nos surpreende ao reivindicar a adaptação de videogame</div>
    <p className="text-gray-700 text-base">
    Diretor de Avatar revelou seu apreço pelo polêmico filme baseado na franquia da Capcom.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mt-12">sábado, 15 de junho</span>
  </div>
</div>

<div className="max-w-sm rounded overflow-hidden shadow-lg ms-8 bg-clarinho">
  <div className="px-6 py-4">
    <img className="w-full mb-4" src="/divertidamente.jpg" alt="" />
    <div className="font-bold text-xl mb-2">“Sua equipe não pode inventar uma cor?”: Diretor de Divertida Mente 2 revela processo divertido (e tortuoso!) para criar novas emoções (Entrevista)</div>
    <p className="text-gray-700 text-base">
        Kelsey Mann descreve, inclusive, a forma como decidiu que a Ansiedade combinava com o laranja.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mt-5">sexta-feira, 14 de junho</span>
  </div>
</div>

<div className="max-w-sm rounded overflow-hidden shadow-lg ms-8 bg-clarinho">
  <div className="px-6 py-4">
    <img className="w-full mb-4" src="/duble.webp" alt="" />
    <div className="font-bold text-xl mb-2">20 minutos a mais que no cinema: Filme de ação de recorde mundial comemora estreia no streaming algumas semanas após seu lançamento</div>
    <p className="text-gray-700 text-base">
    Embora provavelmente não seja mais um sucesso no cinema, o rumo agora está sendo traçado para uma transmissão de sucesso em streaming e em home cinema.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">quarta-feira, 12 de junho</span>
  </div>
</div>

</div>

<h1 className='font-bold text-roxinho text-xl p-3 m-3 ms-8'>Futuros lançamentos - Filmes</h1>
<div className='grid grid-cols-3 gap-4 space-x-6'>

    
            {
                data.map( (artigo, index) => (
                    <div className='card ml-8' key={index}>
                    
                    <img className="mb-2 m-3" src={artigo.image} alt={artigo.title} />
                    <h2 className='m-3text-base text-center ms-1'>{artigo.title}</h2>
                    <h2 className='m-3 text-base text-center'>{artigo.data}</h2>

    <div className='texto m-3 text-base text-left'>
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
