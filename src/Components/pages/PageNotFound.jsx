import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

function NotFoundedPade() {
  return (
    <>
      <style>{`
        .notfound-container {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 2rem;
          background: #f8f8f8;
        }

        .notfound-box {
          width: min(520px, 100%);
          text-align: center;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 24px;
          padding: 3rem 2.25rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }

        .notfound-code {
          font-size: clamp(4rem, 8vw, 7rem);
          font-weight: 900;
          color: #111111;
          letter-spacing: -0.2rem;
          margin-bottom: 0.5rem;
        }

        .notfound-divider {
          width: 80px;
          height: 6px;
          margin: 0 auto 1.5rem;
          border-radius: 999px;
          background: #111111;
        }

        .notfound-title {
          font-size: 2rem;
          margin: 0 0 1rem;
          color: #111111;
          letter-spacing: -0.03em;
        }

        .notfound-desc {
          margin: 0 auto 2rem;
          max-width: 380px;
          color: #333333;
          line-height: 1.8;
          font-size: 1rem;
        }

        .notfound-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.95rem 1.75rem;
          border-radius: 999px;
          background: #111111;
          color: #ffffff;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .notfound-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
          background: #222222;
        }
      `}</style>
      <div className="notfound-container">
        <div className="notfound-box">
          <div className="notfound-code">404</div>
          <div className="notfound-divider"></div>
          <h1 className="notfound-title">Page Not Found</h1>
          <p className="notfound-desc">
            The page you are looking for does not exist or may have been moved. Use the button below to return home.
          </p>
          <Link to="/" className="notfound-btn">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFoundedPade
