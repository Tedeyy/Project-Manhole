import Title from "./heroSection/title";
import Bio from "./heroSection/bio";
import ProjectBody from "./projects/projectBody";
import profile from "../../assets/profile.png";

import "../../assets/css/body.css";

function body() {
  return (
    <>
      <div className="row">
        <div className="col">
          <Title />
        </div>
        <div className="col">
          <img src={profile} alt="profile" className="profile-img" />
        </div>
      </div>
      <div className="divider" />
      <div className="row">
        <div className="col">
          <Bio />
        </div>
      </div>
      <div className="divider" />
      <div className="projects">
        <ProjectBody />
      </div>
    </>
  );
}

export default body;
