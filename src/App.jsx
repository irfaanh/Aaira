import Router from "./Router/Router"
import './App.css'
import WhatsAppIcon from "./Components/WhatsAppIcon"
import { BrowserRouter, useRoutes } from "react-router"
import ScrollToTop from "./Components/ScrollToTop"
import SmoothWrapper from "./Components/SmoothWrapper"

function AppRoute() {
  const element = useRoutes(Router)
  return element
}

function App() {

  return (
    <>
    <BrowserRouter>
      <SmoothWrapper>
        <ScrollToTop/>
        <WhatsAppIcon/>
        <AppRoute/>
      </SmoothWrapper>
    </BrowserRouter>
    </>
  )
}

export default App
