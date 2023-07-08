import React from "react";

function Footer({ light }) {
  return (
    <footer className={light ? "footer light" : "footer"}>
      <div className="container">
        <span className="copyright">
          &copy; {new Date().getFullYear()} Daniel Mudge.
          <p>
            This site was built with React and hosted on AWS. Thanks for your
            time. Enjoy your day. Best regards.
          </p>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
