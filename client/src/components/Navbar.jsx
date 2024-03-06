import { Link } from "react-router-dom"

function Navbar() {

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/createrecipe">Create Recipe</Link>
      <Link to="/savedrecipe">Saved Recipe</Link>
      <Link to="/auth">Login/Register</Link>
    </div>
  )
};

export default Navbar
