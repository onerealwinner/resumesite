import React from "react";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import Logo from "../elements/Logo";
import { getBlogData, getNospaceTitle } from "../../blogs/blogdata";

const allBlogs = getBlogData().slice(-5);

function Header({ light, logoSource, toggleMenu, headerToggler }) {
  const handleClasses = () => {
    let classes = "desktop-header-1 d-flex align-items-start flex-column";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  const handleMobileClasses = () => {
    let classes = "mobile-header-1";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  return (
    <>
      <header className={handleMobileClasses()}>
        <div className="container">
          <div className="menu-icon d-inline-flex mr-4">
            <button onClick={headerToggler}>
              <span></span>
            </button>
          </div>
          {/* <Logo logoSource={logoSource} /> */}
        </div>
      </header>
      <header className={handleClasses()}>
        {/* <Logo logoSource={logoSource} /> */}
        <nav>
          <ul className="vertical-menu scrollspy">
            <li>
              <Link
                activeClass="active"
                to=""
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-home"></i>
                Home
              </Link>
            </li>
            <li>
              <Link to="/blogs">
                <i className="icon-home"></i>
                Blogs
              </Link>
            </li>
            <li>
              <hr />
            </li>
            <li>
              <strong>Latest Blogs</strong>
            </li>

            {allBlogs.map((blogItem) => (
              <li key={blogItem.id}>
                <Link
                  to={`blogs/blog-details/${blogItem.id}/${getNospaceTitle(
                    blogItem.filesource
                  )}`}
                >
                  {blogItem.title}
                </Link>
              </li>
            ))}

            <li>
              <hr />
            </li>
          </ul>
        </nav>

        <div className="footer">
          <span className="copyright">
            &copy; {new Date().getFullYear()} Daniel Mudge.
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;
