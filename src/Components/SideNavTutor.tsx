type SideNaveProps = {
  index: number;
};

function SideNaveTutor({ index }: SideNaveProps) {
  return (
    <>
      <div className="sidenav">
        <ul>
          <li>
            <a className={index === 0 ? "active" : ""} href="/tutor">
              Courses
            </a>
          </li>
          <li>
            <a className={index === 1 ? "active" : ""} href="/tutor/students">
              Students
            </a>
          </li>
          <li>
            <a className={index === 2 ? "active" : ""} href="/tutor/classes">
              Classes
            </a>
          </li>
          <li>
            <a className={index === 3 ? "active" : ""} href="/tutor/exams">
              Exams
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default SideNaveTutor;
