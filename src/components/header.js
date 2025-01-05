import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  let navigate = useNavigate();
  useEffect(() => {
    if (searchQuery.length >= 3) {
      navigate(`/blog/${searchQuery}`);
    }
  }, [searchQuery]);

  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <span className="navbar-brand">
            <img
              alt=""
              src="/logo.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </span>

          <ul className="nav col-12 col-lg-2 me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><NavLink to="/about" className="nav-link px-2 link-dark">About</NavLink></li>
            <li><NavLink to="/blog" className="nav-link px-2 link-dark">Blog</NavLink></li>
          </ul>

          <div className="col-12 col-lg-8 mb-3 mb-lg-0">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;