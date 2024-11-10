import SideNaveTutor from "../Components/SideNavTutor";
import UserTutor from "../Components/UserTutor";

function ExamsTutor() {
  return (
    <>
      <SideNaveTutor index={3} />
      <UserTutor />
      <div className="coursesPanel">
        <div className="examEntry">
          <h6>Lina</h6>
          <h6>
            Math I <br />2 attempts left
          </h6>

          <button>grade</button>
        </div>
        <div className="examEntry">
          <h6>Mathew</h6>
          <h6>
            Math II <br />2 attempts left
          </h6>
          <h6>Score: 75/100</h6>
        </div>
        <div className="examEntry">
          <h6>James</h6>
          <h6>
            Statistics <br />2 attempts left
          </h6>
          <h6>Score: 84/100</h6>
        </div>
        <div className="examEntry">
          <h6>Abrar</h6>
          <h6>
            Math II <br />1 attempts left
          </h6>
          <h6>Score: 46/100</h6>
        </div>
        <div className="examEntry">
          <h6>Marla</h6>
          <h6>
            Linear Algebra <br />2 attempts left
          </h6>
          <h6>Score: 90/100</h6>
        </div>
      </div>
    </>
  );
}
export default ExamsTutor;
