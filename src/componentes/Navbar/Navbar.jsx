import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav>
            <ul className='flex gap-7 ms-8' >
                <li className="hover:underline"><Link to ="/">Home</Link></li>
                <li className="hover:underline"><Link to ="filmes"> Filmes</Link></li> 
                 <li className="hover:underline"><Link to ="contato">Contato</Link></li>
                <li className="hover:underline"><Link to ="sobre">Sobre</Link></li>
              
                
                <li className="hover:underline"><Link to ="favoritos">Favoritos</Link></li>
            </ul>
        </nav>
     );
}

export default Navbar;