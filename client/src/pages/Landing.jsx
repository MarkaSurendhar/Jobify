import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Wrapper from "../wrappers/LandingPage";
import { Logo } from "../components";
// import "../index.css";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            corrupti blanditiis aperiam quibusdam, ad necessitatibus vero illum
            atque provident quo exercitationem at magnam quam enim minus aut
            natus voluptate vel.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
