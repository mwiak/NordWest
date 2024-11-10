import SideNaveStudent from "../Components/SideNav";
import User from "../Components/User";

function Exams() {
  return (
    <>
      <User></User>
      <SideNaveStudent index={2}></SideNaveStudent>
      <div className="coursesPanel">
        <div className="examSlot">
          <h6>Service Manegment</h6>
          <h6>
            <strong>3</strong> attempts left
          </h6>
          <button>book exam</button>
        </div>
        <div className="examSlot">
          <h6>digital business</h6>
          <h6>
            <strong>2</strong> attempts left
          </h6>
          <button>book exam</button>
        </div>
        <div className="examSlot">
          <h6>ethics and sustainabilty</h6>
          <h6>
            <strong>3</strong> attempts left
          </h6>
          <button>upload project</button>
        </div>
        <div className="examSlot">
          <h6>Statisitcs</h6>
          <h6>
            <strong>3</strong> attempts left
          </h6>
          <h6>Not eligible</h6>
        </div>
      </div>
    </>
  );
}
export default Exams;
