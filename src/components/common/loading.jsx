import React from "react";

function Loading() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div className="loader"> Loading Movies..</div>
    </div>
  );
}

export default Loading;
