import React from 'react'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import UserNav from '../Components/UserNav'
import FooterTop from '../Components/FooterTop'

const Layout = () => {
  return (
    <>
    <UserNav/>
    <main className='min-h-screen'>
        <Outlet/>
    </main>
    <FooterTop/>
    <Footer/>
    </>
  )
}

export default Layout