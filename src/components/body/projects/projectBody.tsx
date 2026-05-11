import "../../../assets/css/projectBody.css";

import lmsclient from "../../../assets/project/lms-client.jpg";
import lmsscreenshot from "../../../assets/project/lms-screenshot.png";
import qaoscreenshot1 from "../../../assets/project/qao-screenshot1.png";
import qaoscreenshot2 from "../../../assets/project/qao-screenshot2.png";
import litmeetscreenshot1 from "../../../assets/project/litmeet-screenshot1.png";
import litmeetscreenshot2 from "../../../assets/project/litmeet-screenshot2.png";

function projectBody() {
  return (
    <>
      <div className="project-container">
        <h1>Projects</h1>
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
            <h4>Quality Assurance System | Northern Bukidnon State College</h4>
          </div>
          <div className="image-container">
            <img
              src={qaoscreenshot1}
              alt="qao-screenshot1"
              className="project-image"
            />
            <img
              src={qaoscreenshot2}
              alt="qao-screenshot2"
              className="project-image"
            />
          </div>
          <div className="description">
            <p>
              The Quality Assurance System is an online system that is developed
              to help the Quality Assurance Office of the Northern Bukidnon
              State College have a better and interactive quality assurance
              experience. The main features are:
              <br />
              <br />• Accreditation Tracking
              <br />• Document Mapping
              <br />• Activity Monitoring & Evaluation
            </p>
          </div>
        </div>
        <div className="project">
          <div className="title">
            <h4>
              InnoVision | A E-Commerce Platform for Local Livestock Farmers
            </h4>
          </div>
          <div className="image-container">
            <img
              src={qaoscreenshot1}
              alt="qao-screenshot1"
              className="project-image"
            />
            <img
              src={qaoscreenshot2}
              alt="qao-screenshot2"
              className="project-image"
            />
          </div>
          <div className="description">
            <p>
              The Quality Assurance System is an online system that is developed
              to help the Quality Assurance Office of the Northern Bukidnon
              State College have a better and interactive quality assurance
              experience. The main features are:
              <br />
              <br />• Accreditation Tracking
              <br />• Document Mapping
              <br />• Activity Monitoring & Evaluation
            </p>
          </div>
        </div>
        <div className="project">
          <div className="title">
            <h4>Guardian | CyberSecurity Prototype</h4>
          </div>
          <div className="image-container">
            <img
              src={qaoscreenshot1}
              alt="qao-screenshot1"
              className="project-image"
            />
            <img
              src={qaoscreenshot2}
              alt="qao-screenshot2"
              className="project-image"
            />
          </div>
          <div className="description">
            <p>
              The Quality Assurance System is an online system that is developed
              to help the Quality Assurance Office of the Northern Bukidnon
              State College have a better and interactive quality assurance
              experience. The main features are:
              <br />
              <br />• Accreditation Tracking
              <br />• Document Mapping
              <br />• Activity Monitoring & Evaluation
            </p>
          </div>
        </div>
        <div className="project">
          <div className="title">
            <h4>Simple Intrusion Detection System</h4>
          </div>
          <div className="image-container">
            <img
              src={qaoscreenshot1}
              alt="qao-screenshot1"
              className="project-image"
            />
            <img
              src={qaoscreenshot2}
              alt="qao-screenshot2"
              className="project-image"
            />
          </div>
          <div className="description">
            <p>
              The Quality Assurance System is an online system that is developed
              to help the Quality Assurance Office of the Northern Bukidnon
              State College have a better and interactive quality assurance
              experience. The main features are:
              <br />
              <br />• Accreditation Tracking
              <br />• Document Mapping
              <br />• Activity Monitoring & Evaluation
            </p>
          </div>
        </div>
        <div className="project">
          <div className="title">
            <h4>LitMeet | A Cross-Platform Social Networking App </h4>
          </div>
          <div className="image-container">
            <img
              src={litmeetscreenshot1}
              alt="litmeet-screenshot1"
              className="project-image"
            />
            <img
              src={litmeetscreenshot2}
              alt="litmeet-screenshot2"
              className="project-image"
            />
          </div>
          <div className="description">
            <p>
              The Quality Assurance System is an online system that is developed
              to help the Quality Assurance Office of the Northern Bukidnon
              State College have a better and interactive quality assurance
              experience. The main features are:
              <br />
              <br />• Accreditation Tracking
              <br />• Document Mapping
              <br />• Activity Monitoring & Evaluation
            </p>
          </div>
        </div>
        <div className="project">
          <div className="title">
            <h4>Fkidz | A Digitalized Market for Quality Chicken Parts</h4>
          </div>
          <div className="image-container">
            <img
              src={qaoscreenshot1}
              alt="qao-screenshot1"
              className="project-image"
            />
            <img
              src={qaoscreenshot2}
              alt="qao-screenshot2"
              className="project-image"
            />
          </div>
          <div className="description">
            <p>
              The Quality Assurance System is an online system that is developed
              to help the Quality Assurance Office of the Northern Bukidnon
              State College have a better and interactive quality assurance
              experience. The main features are:
              <br />
              <br />• Accreditation Tracking
              <br />• Document Mapping
              <br />• Activity Monitoring & Evaluation
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default projectBody;
