import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
          <small className="text-muted text-center">Copyright © {year}</small>
    </footer>
  );
}

export default Footer;
