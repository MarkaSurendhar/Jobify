import { useLoaderData, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";
import Wrapper from "../wrappers/StatsContainer";
import { toast } from "react-toastify";
import StatItem from "../components/StatsItem";

export const loader = async () => {
  try {
    const response = await customFetch.get("/users/admin/app-stats");
    return response.data;
  } catch (error) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();
  console.log(users, jobs);
  return (
    <Wrapper>
      <StatItem
        title="current users"
        count={users}
        color="#e9b949"
        bcg="#fcefc7"
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title="total jobs"
        count={jobs}
        color="#647acb"
        bcg="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
};
export default Admin;
