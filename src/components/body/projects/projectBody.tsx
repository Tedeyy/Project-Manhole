import "../../../assets/css/projectBody.css";

import lmsclient from "../../../assets/lms-client.jpg";
import lmsscreenshot from "../../../assets/lms-screenshot.png";

function projectBody() {
  return (
    <>
      <div className="project-container">
        <div className="project">
          <h4 className="title">Learning Management System</h4>
          <div className="image-container">
            <img src={lmsclient} alt="lms-client" className="project-image" />
            <img
              src={lmsscreenshot}
              alt="lms-screenshot"
              className="project-image"
            />
          </div>
          <div className="description">
            <p>
              This is a Research Project for my clients from Institute of
              Teacher Education.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default projectBody;
