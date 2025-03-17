import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../wrappers/LogoutContainer";
import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";

const LogOutContainer = () => {
  const { user, logoutUser } = useDashboardContext();

  const [showLogout, setShowLogout] = useState(false);

  return (
    <Wrapper>
      <button
        type="button"
        className="logout-btn btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        {user.avatar ? (
          <img src={user.avatar} alt="avatar" className="img" />
        ) : (
          <FaUserCircle />
        )}
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? " dropdown show-dropdown" : "dropdown"}>
        <button className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};
export default LogOutContainer;
