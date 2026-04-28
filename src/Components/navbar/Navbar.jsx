import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 4.5rem;
          background: #ffffff;
          box-shadow: 0 0.75rem 1.75rem rgba(33, 37, 41, 0.08);
          border-bottom: 1px solid rgba(108, 117, 125, 0.16);
          font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
        }

        .navbar-logo {
          font-size: 1.7rem;
          font-weight: 700;
          text-decoration: none;
          color: #0d6efd;
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .nav-item {
          text-decoration: none;
          color: #495057;
          font-weight: 600;
          font-size: 0.98rem;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid transparent;
          transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
          background: transparent;
        }

        .nav-item:hover {
          color: #0d6efd;
          background: rgba(13, 110, 253, 0.08);
          transform: translateY(-1px);
          border-color: rgba(13, 110, 253, 0.18);
        }

        .nav-item.active {
          color: #ffffff;
          background: #0d6efd;
          border-color: #0d6efd;
          box-shadow: 0 0.5rem 1rem rgba(13, 110, 253, 0.12);
        }
      `}</style>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo">
          Muhammed Atif
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            About
          </NavLink>
          <NavLink to="/skills" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Projects
          </NavLink><NavLink to="/certificates" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Certificates
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Experience
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
