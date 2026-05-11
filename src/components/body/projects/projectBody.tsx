import Image from "../../../assets/lms-client.jpg";

function projectBody() {
  return (
    <>
      <div className="projects">
        <div className="row">
          <div className="col title">
            <div className="row project-image">
              <div className="col">
                <img src={Image} alt="lms-client" />
              </div>
              <div className="col">
                <img src={Image} alt="lms-client" />
              </div>
              <h5>Learning Management System</h5>
            </div>
          </div>
          <div className="col desc">
            This is a Research Project for my clients from Institute of Teacher
            Education.
          </div>
        </div>
      </div>
    </>
  );
}

export default projectBody;
