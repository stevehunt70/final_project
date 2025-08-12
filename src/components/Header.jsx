import React from "react";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 16px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div>☰</div>

      <input
        type="text"
        placeholder="Search"
        style={{
          flexGrow: 1,
          margin: "0 20px",
          padding: "6px 12px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      <img
        src="..assets/Profile.png"
        alt="Profile"
        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
      />
    </header>
  );
};

export default Header;
