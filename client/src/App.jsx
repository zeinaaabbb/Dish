import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Auth  from "./pages/Auth/Auth";
import CreateRecipe from './pages/Create Recipe/CreateRecipe';
import SavedRecipe from './pages/Saved Recipe/SavedRecipe';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/auth" element={< Auth />} />
          <Route path="/createrecipe" element={< CreateRecipe />} />
          <Route path="/savedrecipe" element={< SavedRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
