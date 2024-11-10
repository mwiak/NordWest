import { useParams } from "react-router-dom";
import SideNaveStudent from "../Components/SideNav";
import User from "../Components/User";
import Courses from "../Courses";

function renderB(index: number) {
  const elements = [];
  for (let x = 1; x <= index; x++) {
    elements.push(
      <div className="pdf" key={x}>
        <img
          src="https://cdn-icons-png.freepik.com/256/16425/16425681.png?semt=ais_hybrid"
          alt="pdf"
          className="pdfImg"
        />
        <p>Coursebook #{x}</p>
      </div>
    );
  }
  return elements;
}
function renderS(index: number) {
  const elements = [];
  for (let x = 1; x <= index; x++) {
    elements.push(
      <div className="slides" key={x}>
        <img src="/powerpoint.png" alt="pdf" className="slidesImg" />
        <p>Slide #{x}</p>
      </div>
    );
  }
  return elements;
}

function renderPreWork(index: number) {
  const elements = [];
  for (let x = 1; x <= index; x++) {
    elements.push(
      <div className="slides" key={x}>
        <img src="/test.png" alt="pdf" className="slidesImg" />
        <p>unit {x} </p>
      </div>
    );
  }
  return elements;
}

function Course() {
  const param = useParams();
  const courseID = param.courseID;
  const course = Courses.find((course) => course.courseID === courseID);
  const rednerBooks = () => {};

  return (
    <>
      <User></User>
      <SideNaveStudent index={0}></SideNaveStudent>
      {course && (
        <>
          <div className="coursesPanel">
            <h2>{course.title}</h2>
            <h6>exam type: {course.examType}</h6>
            <h5>course books</h5>
            {renderB(course.numberOfPdfs)}
            <h5>Slides</h5>
            <div className="slots">{renderS(course.numberOfSLides)}</div>
            <h5>pre-work</h5>
            <div className="slots">
              {renderPreWork(course.preWork.nOfunits)}
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Course;
