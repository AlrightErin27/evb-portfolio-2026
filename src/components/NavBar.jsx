import { NavLink } from "react-router-dom";

const linkBase = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
const linkActive = "bg-slate-800 text-white";
const linkInactive = "text-slate-300 hover:bg-slate-800 hover:text-white";

export default function NavBar() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">
          <span className="text-indigo-400">&lt;Erin</span>
          <span className="text-slate-100">Dev /&gt;</span>
        </div>

        <div className="flex gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/games"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Games
          </NavLink>

          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Resume
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Blog
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
