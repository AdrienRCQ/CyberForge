import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Servers from "./pages/Servers";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      {/* MENU */}
      <nav className="navbar">
        <h2>MyApp</h2>

        <div className="nav-links">
          <Link to="/servers" className="nav-link">
            Servers
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Servers />} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;