import { BrowserRouter as Router, Link } from "react-router-dom";
import '../../style/App.scss'
import AppRoute from "./AppRoute";
import Buttons from "../UI/MyButton/Buttons";
import { useContext } from "react";
import { AuthContext } from "../../context/context";

const Navbar = () => {
  const {setAuth} = useContext(AuthContext)

  const exit = () => {
    setAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <Router>
      <div className ='navbar'>
        <Buttons onClick={exit} >Выйти</Buttons>
        <div className="navbar__links">
          <Link to='/' >Посты</Link>
        </div>
      </div>

      <AppRoute/>
    </Router>
  )
}
export default Navbar;