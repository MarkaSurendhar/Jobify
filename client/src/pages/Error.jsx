import { Link, useRouteError } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../wrappers/ErrorPage";

const Error = () => {
  const error = useRouteError();
  // console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>ohh! page not found</h3>
          <p>we can't seem to find the page you are looking for</p>
          <Link to="/dashboard">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <div>
      <h1>Error</h1>
      <Link to="/">back home</Link>
    </div>
  );
};
export default Error;
