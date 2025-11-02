import React from 'react'
import './App.css'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Work from './Components/Work/Work.jsx'
import Experience from './Components/Experience/Experience.jsx'
import MasterLayout from './Components/MasterLayout/MasterLayout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  let routes=createBrowserRouter([
    {
      path:"/",
      element:<MasterLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"home",
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"skills",
          element:<Skills/>
        },
        {
          path:"experience",
          element:<Experience/>
        },
        {
          path:"work",
          element:<Work/>
        }
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App
