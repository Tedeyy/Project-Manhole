import "../../../assets/css/projectBody.css";

import lmsclient from "../../../assets/lms-client.jpg";
import lmsscreenshot from "../../../assets/lms-screenshot.png";

function projectBody() {
  return (
    <>
      <div className="project-container">
        <div className="project">
          <div className="title">
            <h4>EduReady | A Learning Management System</h4>
          </div>
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
              EduReady is an online Learning Management System that is developed
              to help the students of the Institute of Teacher Education have a
              better and interactive learning experience.
              <br />
              <br />
              Currently the system is under development and is launched for
              prototype testing.
            </p>
          </div>
        </div>
        <div className="project">
          <div className="title">
            <h4>EduReady | A Learning Management System</h4>
          </div>
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
              EduReady is an online Learning Management System that is developed
              to help the students of the Institute of Teacher Education have a
              better and interactive learning experience.
              <br />
              <br />
              Currently the system is under development and is launched for
              prototype testing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default projectBody;
