import { useNavigate } from "react-router-dom";

function LogInScreen() {
  const handleClickS = () => navigate("/student/courses");
  const handleClickT = () => navigate("/tutor");
  const navigate = useNavigate();
  return (
    <>
      <div className="card p-4 login">
        <img src="/logo.png" alt="" />
        <h2>Login as</h2>

        <ul className="list-group">
          <li className="list-group-item" onClick={handleClickS}>
            {" "}
            <img src="\graduated.png" alt="Student" className="icon"></img>
            <span>a Student</span>
          </li>
          <li className="list-group-item" onClick={handleClickT}>
            {" "}
            <img src="\tutor.png" alt="Student" className="icon"></img>
            <span>a Tutor</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LogInScreen;
