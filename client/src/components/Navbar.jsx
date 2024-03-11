import { Link } from "react-router-dom"
import styles from "./Navbar.module..css"

const linkStyle = {
  textDecoration: 'none',
  margin: '0 10px',

  // Add more styles as needed
};

function Navbar() {

  return (
    <div className="navbar">
      <Link to="/" className="navLink-logo" style={linkStyle}>DISH</Link>
      <Link to="/createrecipe" className="navLink" style={linkStyle}>Create Recipe</Link>
      <Link to="/savedrecipe" className="navLink" style={linkStyle}>Saved Recipe</Link>
      <Link to="/auth" className="navLink" style={linkStyle} >Login/Register</Link>
    </div>
  )
};

export default Navbar
