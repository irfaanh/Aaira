import Router from "./Router/Router"
import './App.css'
import WhatsAppIcon from "./Components/WhatsAppIcon"
import { BrowserRouter, useRoutes } from "react-router"
import ScrollToTop from "./Components/ScrollToTop"

function AppRoute() {
  const element = useRoutes(Router)
  return element
}

function App() {

  return (
    <>
    <BrowserRouter>
      <ScrollToTop/>
      <WhatsAppIcon/>
      <AppRoute/>
    </BrowserRouter>
    </>
  )
}

export default App
