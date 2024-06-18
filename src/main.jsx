import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound.jsx'
import Filmes from './pages/Filmes.jsx'
import Sobre from './pages/Sobre.jsx'
import Contato from './pages/Contato.jsx'
import Home from './pages/Home.jsx'
import PaginaFilme from './pages/PaginaFilme.jsx'
import Favoritos from './pages/Favoritos.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        {index: true, element: <Home/> },
        {path: "filmes", element: <Filmes/>},
        {path: "filmes/:id", element: <PaginaFilme/>},
        {path: "sobre", element: <Sobre/>},
        {path: "contato", element: <Contato/>},
        {path: "*", element: <PageNotFound/>},
        {path: "favoritos", element: <Favoritos/>}

      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
