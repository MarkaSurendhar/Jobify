import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { BigSideBar, Navbar, SmallSideBar } from "../components";
import Wrapper from "../wrappers/DashBoardPage";
import { createContext, useContext, useState } from "react";
import { checkDefaultTheme } from "../App";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

const DashboardContext = createContext();

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");
    return data;
  } catch (error) {
    console.log(error);
    return redirect("/");
  }
};

const DashboardLayout = () => {
  const navigate = useNavigate();

  const { user } = useLoaderData();
  const [showSideBar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsdarkTheme] = useState(checkDefaultTheme);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsdarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("dark-theme", newDarkTheme);
  };

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("Logged out");
  };

  const toggoleSideBar = () => {
    setShowSidebar(!showSideBar);
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSideBar,
        isDarkTheme,
        toggoleSideBar,
        toggleDarkTheme,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSideBar />
          <BigSideBar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
