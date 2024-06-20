import {Outlet} from "react-router-dom"
import Header from "./componentes/Header/Header"
import Pesquisa from "./componentes/Pesquisa/Pesquisa"



function App() {

  return (
    <>
     <Header/>
     <Pesquisa/>
     
     <Outlet/>
    </>
  )
}

export default App
