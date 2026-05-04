import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-root">
      {/* Background */}
      <div className="login-bg">
        <img src="/money_heist2.jpg" alt="" aria-hidden="true" />
        <div className="login-bg__overlay" />
      </div>

      {/* Card */}
      <div className="login-card">
        {/* Brand */}
        <div className="login-card__brand">
          <span className="login-card__brand-dot" />
          <span className="login-card__brand-name">STREAMR</span>
        </div>

        <div className="login-card__body">
          <h1 className="login-card__heading">Welcome back</h1>
          <p className="login-card__sub">Sign in to continue watching</p>

          <div className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <div className="form-group__label-row">
                <label htmlFor="password">Password</label>
                <a href="#" className="form-group__forgot">
                  Forgot?
                </a>
              </div>
              <div className="form-group__input-wrap">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="form-group__eye"
                  onClick={() => setShowPassword((p) => !p)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <Link to="/products" className="login-submit">
              Sign In
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                width="16"
                height="16"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <div className="login-divider">
              <span>or</span>
            </div>

            <button className="login-guest">Continue as Guest</button>
          </div>
        </div>

        <p className="login-card__footer">
          No account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
