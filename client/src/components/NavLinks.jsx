import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/Links";

const NavLinks = ({ isBigSideBar }) => {
  const { toggoleSideBar, user } = useDashboardContext();

  return (
    <div className="nav-links">
      {links.map(({ path, text, icon }) => {
        const { role } = user;
        if (path === "admin" && role === "user") return;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSideBar ? null : toggoleSideBar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
