import React, { useState } from "react";

const userData = {
  name: "John Doe",
  studentID: "S000000004",
  program: "Interantional Relations",
  semester: "2",

  email: "john.doe@example.com",
  phone: "123-456-7890",
};

function User() {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <div
      style={{
        position: "fixed", // Fixed position relative to the viewport
        top: 0, // Align to the top
        right: 0, // Align to the right
        margin: "20px", // Add margin to create space from the edge
      }}
    >
      {/* Conditionally render either the button or the card */}
      {!showCard ? (
        <button
          onClick={toggleCard}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span role="img" aria-label="user-icon">
            👤
          </span>
        </button>
      ) : (
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "8px",
            width: "330px",
          }}
        >
          <h2>Student Details</h2>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Student ID:</strong> {userData.studentID}
          </p>
          <p>
            <strong>Program:</strong> {userData.program}
          </p>
          <p>
            <strong>Current Semester:</strong> {userData.semester}
          </p>
          <a href="/">Log out</a>

          <button
            onClick={toggleCard}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
export default User;
