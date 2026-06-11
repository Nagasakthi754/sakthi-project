import React from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Mood from './pages/Mood'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Quest from './pages/Quest'
import RootLayout from './layout/RootLayout'
import QuestTest from './pages/QuestTest'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path='/' element={<RootLayout />}>
            <Route index element= {<Home/>} />
            <Route path='Mood' element= {<Mood/>} />
            <Route path='Quest' element= {<Quest/>} />
            <Route path='QuestTest' element= {<QuestTest/>} />

      </Route>
    )
  )

  return (
   
      <RouterProvider router={router} />

  )
}

export default App