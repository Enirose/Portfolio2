import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Components/Sass/styles.scss'
import Navigation from "./NavBar";
import Portfolio from "./Home";
import FooterForm from "./Footer";




export default function App () {
  return (
    <Router>
      <Navigation/>
      <Routes> 
        <Route>
          <Route path="/" element={<Portfolio/>}>
          </Route>
        </Route>
      </Routes>
      <FooterForm/>
    </Router>
  )
}