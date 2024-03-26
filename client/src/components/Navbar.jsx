import { Link, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie";
import "./Navbar.module..css"


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
      <Link to="/" className="navLink-logo">DISH.</Link>
      <Link to="/createrecipe" className="navLink">create your recipe</Link>
      <Link to="/savedrecipe" className="navLink">save your recipe</Link>
      {!cookies.access_token ? (
        <Link to="/auth" className="navLink">Log in</Link>
      ) : (
        <button onClick={logout}  className="navLink"> Log out </button>
      )}
    </div>
  )
};

export default Navbar
