import Wrapper from "../wrappers/SmallSideBar";
import { useDashboardContext } from "../pages/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const SmallSideBar = () => {
  const { showSideBar, toggoleSideBar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggoleSideBar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSideBar;
