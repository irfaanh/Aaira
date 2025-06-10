import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router'
import UserHome from '../Pages/UserHome'
import ServicePage from '../Pages/ServicePage'
import PackagePage from '../Pages/PakagePage'
import ContactSection from '../Pages/ContactSection'
import Layout from '../Pages/Layout'
import Thailand from '../Pages/Packages/Thailand'
import Bali from '../Pages/Packages/Bali'
import Malaysia from '../Pages/Packages/Malaysia'
import Manali from '../Pages/Packages/Manali'

const Router = [
  {
      path:'/',
      element:<Layout/>,
      children:[
        {path:"",element:<UserHome/>},
        {path:"/packages",element:<PackagePage/>},
        {path:"/allservices",element:<ServicePage/>},
        {path:"/contact",element:<ContactSection/>},

        {path:"/thailand",element:<Thailand/>},
        {path:"/bali",element:<Bali/>},
        {path:"/malaysia",element:<Malaysia/>},

        {path:"/manali",element:<Manali/>},

      ]
  }
]

export default Router