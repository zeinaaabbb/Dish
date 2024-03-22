import { Link, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie";
import styles from "./Navbar.module..css"

const linkStyle = {
  textDecoration: 'none',
  margin: '0 10px',
  // Add more styles as needed
};

function Navbar() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="navbar">
      <Link to="/" className="navLink-logo" style={linkStyle}>DISH</Link>
      <Link to="/createrecipe" className="navLink" style={linkStyle}>Create Recipe</Link>
      <Link to="/savedrecipe" className="navLink" style={linkStyle}>Saved Recipe</Link>
      {!cookies.access_token ? (
        <Link to="/auth" className="navLink" style={linkStyle}>Login</Link>
      ) : (
        <button onClick={logout}  className="navLink"> Logout </button>
      )}
    </div>
  )
};

export default Navbar
