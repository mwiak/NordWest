type SideNaveProps = {
  index: number;
};

function SideNaveStudent({ index }: SideNaveProps) {
  return (
    <>
      <div className="sidenav">
        <ul>
          <li>
            <a className={index === 0 ? "active" : ""} href="/student/courses">
              Courses
            </a>
          </li>
          <li>
            <a className={index === 1 ? "active" : ""} href="/student/classes">
              Classes
            </a>
          </li>
          <li>
            <a className={index === 2 ? "active" : ""} href="/student/exams">
              Exams
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default SideNaveStudent;
