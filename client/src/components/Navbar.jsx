import { Link, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie";
import styles from "./Navbar.module.css"


function Navbar() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navLinklogo}>DISH.</Link>
      <Link to="/createrecipe" className={styles.navLink}>create your recipe</Link>
      <Link to="/savedrecipe" className={styles.navLink}>save your recipe</Link>
      {!cookies.access_token ? (
        <Link to="/auth" className={styles.navLink}>Log in</Link>
      ) : (
        <button className={styles.logoutbtn} onClick={logout} > Log out </button>
      )}
    </div>
  )
};

export default Navbar
