import UserTutor from "../Components/UserTutor";
import SideNaveTutor from "../Components/SideNavTutor";
import React, { useState } from "react";

function TutorStudents() {
  const [menuVisible, setMenuVisible] = useState(0);

  // Function to toggle menu visibility
  const toggleMenu = (x: number) => {
    if (menuVisible === 0) {
      setMenuVisible(x);
      console.log(x);
    } else {
      setMenuVisible(0);
      console.log(0);
    }
  };

  return (
    <>
      <SideNaveTutor index={1}></SideNaveTutor>
      <UserTutor></UserTutor>
      <div className="coursesPanel">
        <h5>Students Manegement</h5>
        <div className="studentEntry">
          <h6>Mark</h6>
          <h6>
            Math I <br /> Linear Algebra
          </h6>
          <button onClick={() => toggleMenu(1)}>
            +{" "}
            {menuVisible === 1 && (
              <div className="contextMenu">
                <ul>
                  <li onClick={() => console.log("action performed")}>
                    assign new task
                  </li>
                  <li onClick={() => console.log("action performed")}>
                    Notify
                  </li>
                  <li onClick={() => console.log("action performed")}>
                    Show attempts left
                  </li>
                  <li onClick={() => console.log("action performed")}>
                    Show grades record
                  </li>
                </ul>
              </div>
            )}
          </button>
        </div>
        <div className="studentEntry">
          <h6>Marla</h6>
          <h6>
            Math I <br /> Math II
          </h6>
          <button onClick={() => toggleMenu(2)}>
            +{" "}
            {menuVisible === 2 && (
              <div className="contextMenu">
                <ul>
                  <li onClick={() => console.log("action performed")}>
                    assign new task
                  </li>
                  <li onClick={() => console.log("action performed")}>
                    Notify
                  </li>
                  <li onClick={() => console.log("action performed")}>
                    Show attempts left
                  </li>
                  <li onClick={() => console.log("action performed")}>
                    Show grades record
                  </li>
                </ul>
              </div>
            )}
          </button>
        </div>
        <div className="studentEntry">
          <h6>Sarah</h6>
          <h6>
            Math I <br /> Math II <br /> Linear Algebra
          </h6>
          <button onClick={() => toggleMenu(3)}>
            +{" "}
            {menuVisible === 3 && (
              <div className="contextMenu">
                <ul>
                  <li onClick={() => console.log("action performed")}>
                    assign new task
                  </li>
                  <li onClick={() => console.log("action performed")}>
                    Notify
                  </li>
                  <li onClick={() => console.log("action performed")}>
                    Show attempts left
                  </li>
                  <li onClick={() => console.log("action performed")}>
                    Show grades record
                  </li>
                </ul>
              </div>
            )}
          </button>
        </div>
        <div className="studentEntry">
          <h6>Adam</h6>
          <h6>Math II</h6>
          <button onClick={() => toggleMenu(4)}>
            +{" "}
            {menuVisible === 4 && (
              <div className="contextMenu">
                <ul>
                  <li onClick={() => console.log("action performed")}>
                    assign new task
                  </li>
                  <li onClick={() => console.log("action performed")}>
                    Notify
                  </li>
                  <li onClick={() => console.log("action performed")}>
                    Show attempts left
                  </li>
                  <li onClick={() => console.log("action performed")}>
                    Show grades record
                  </li>
                </ul>
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default TutorStudents;
