import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex justify-around bg-roxinho text-zinc-50 p-4">
            <span className="justify-content-">Gioboxd</span>
            <Navbar/>
        </header>
     );
}

export default Header ;