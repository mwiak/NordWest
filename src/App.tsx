import LogInScreen from "./Pages/LogIn";
import TutorCourses from "./Pages/Tutor";
import Student from "./Pages/Student";
import Course from "./Pages/Course";
import Exams from "./Pages/Exams";
import Classes from "./Pages/Classes";
import CourseTutor from "./Pages/CourseTutor";
import ClassesTutor from "./Pages/ClassesTutor";
import ExamsTutor from "./Pages/ExamsTutor";
import TutorStudents from "./Pages/TutorStudents";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInScreen />}></Route>
          <Route path="/tutor" element={<TutorCourses />}></Route>
          <Route path="/tutor/:courseID" element={<CourseTutor />}></Route>
          <Route path="/tutor/classes" element={<ClassesTutor />}></Route>
          <Route path="/tutor/exams" element={<ExamsTutor />}></Route>
          <Route path="/tutor/students" element={<TutorStudents />}></Route>
          <Route path="/student/courses" element={<Student />}></Route>
          <Route path="/student/:courseID" element={<Course />}></Route>
          <Route path="/student/exams" element={<Exams />}></Route>
          <Route path="/student/classes" element={<Classes />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
