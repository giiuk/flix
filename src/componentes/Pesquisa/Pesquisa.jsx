import { useLocation } from "react-router-dom";

function Pesquisa() {
    const location = useLocation();

    if (location.pathname === "/") return null;

    return ( 
        <>
        <input className= "border-transparent px-6 m-6 p-2 bg-clarinho rounded-full border-3 placeholder-white" type="text" id="buscar" placeholder='Digite sua busca'/>
        <hr className="h-px m-2 border-0 bg-roxinho p-0"></hr>
        </>
     );
}

export default Pesquisa;