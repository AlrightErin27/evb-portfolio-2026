import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home.jsx";
import Games from "./pages/Games.jsx";
import Resume from "./pages/Resume.jsx";
import Blog from "./pages/Blog.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <NavBar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
