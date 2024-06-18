import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className=" text-lg flex justify-between bg-roxinho text-zinc-50 p-6">
            <span className="ms-8">Gioboxd</span>
            <Navbar/>
        </header>
     );
}

export default Header ;