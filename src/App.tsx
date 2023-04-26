import React from 'react'
import './sass/App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { GameList } from './components/GameList/GameList'
import { GameDetail } from './components/GameDetail'
import { Header } from './pages/Header/Header'

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/games',
      element: <GameList/>
    },
    {
      path: '/games/:id',
      element: <GameDetail/>
    }
  ])
  return (
    <React.Fragment>
      <Header/>
      <RouterProvider router={router}/>
    </React.Fragment>
  )
}

export default App
