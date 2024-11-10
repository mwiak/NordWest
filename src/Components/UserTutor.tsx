import React, { useState } from "react";

const userData = {
  name: "Mark",
  tutorID: "T000000009",
  program: "Interantional Relations",
};

function UserTutor() {
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
            <strong>Tutor ID:</strong> {userData.tutorID}
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
export default UserTutor;
