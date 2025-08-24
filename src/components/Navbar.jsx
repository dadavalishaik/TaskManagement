// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#007BFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
      }}
    >
      <div style={{ fontSize: "22px", fontWeight: "bold", color: "white" }}>
        MyWebsite
      </div>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "15px",
          margin: 0,
          padding: 0
        }}
      >
        <li>
          <a
            href="/login"
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "8px 15px",
              borderRadius: "5px",
              textDecoration: "none",
              fontSize: "16px"
            }}
          >
            Login
          </a>
        </li>
        <li>
          <a
            href="/signup"
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "8px 15px",
              borderRadius: "5px",
              textDecoration: "none",
              fontSize: "16px"
            }}
          >
            Signup
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
