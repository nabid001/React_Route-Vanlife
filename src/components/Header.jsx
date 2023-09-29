import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <header>
        <NavLink className="site-logo" to="/">
          #VanLife
        </NavLink>
        <nav>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/host"
          >
            Host
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/vans"
          >
            Vans
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
