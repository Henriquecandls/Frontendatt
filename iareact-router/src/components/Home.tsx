import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button
          className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          aria-label="Toggle theme (auto)"
        >
          <svg className="bi my-1 theme-icon-active" aria-hidden="true">
            <use href="#circle-half"></use>
          </svg>
          <span className="visually-hidden" id="bd-theme-text">
            Toggle theme
          </span>
        </button>
        <ul
          className="dropdown-menu dropdown-menu-end shadow"
          aria-labelledby="bd-theme-text"
        >
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center"
              data-bs-theme-value="light"
              aria-pressed="false"
            >
              <svg className="bi me-2 opacity-50" aria-hidden="true">
                <use href="#sun-fill"></use>
              </svg>
              Light
              <svg className="bi ms-auto d-none" aria-hidden="true">
                <use href="#check2"></use>
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center"
              data-bs-theme-value="dark"
              aria-pressed="false"
            >
              <svg className="bi me-2 opacity-50" aria-hidden="true">
                <use href="#moon-stars-fill"></use>
              </svg>
              Dark
              <svg className="bi ms-auto d-none" aria-hidden="true">
                <use href="#check2"></use>
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center active"
              data-bs-theme-value="auto"
              aria-pressed="true"
            >
              <svg className="bi me-2 opacity-50" aria-hidden="true">
                <use href="#circle-half"></use>
              </svg>
              Auto
              <svg className="bi ms-auto d-none" aria-hidden="true">
                <use href="#check2"></use>
              </svg>
            </button>
          </li>
        </ul>
      </div>

      <main className="form-signin w-100 m-auto">
        <form>
          <img
            className="mb-4"
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Bootstrap logo"
            width={72}
            height={57}
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="checkDefault"
            />
            <label className="form-check-label" htmlFor="checkDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2025</p>
        </form>
      </main>
    </>
  );
};

export default Home;