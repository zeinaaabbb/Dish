import {link} from "react-router-dom"

function Navbar() {

  return (
    <div className="navbar">
      <link to="/">Home</link>
      <link to="/createrecipe">Create Recipe</link>
      <link to="/savedrecipe">Saved Recipe</link>
      <link to="/auth">Login/Register</link>
    </div>
  )
};

export default Navbar
