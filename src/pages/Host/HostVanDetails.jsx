import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const HostVanDetails = () => {
  const [vans, setVans] = useState([]);
  const params = useParams();

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const VanDetails = vans.map((van, index) => {
    return (
      <section key={index} id={index}>
        <Link to="/host/vans" className="vans_back-button back-button">
          ⬅ Back to all vans
        </Link>
        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={van.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${van.type}`}>{van.type}</i>
              <h3>{van.name}</h3>
              <h4>${van.price}/day</h4>
            </div>
          </div>
          <nav className="host-van-detail-nav">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="."
              end
            >
              Details
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="photos"
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ vans }} />
        </div>
      </section>
    );
  });

  return <div> {VanDetails}</div>;
};

export default HostVanDetails;
