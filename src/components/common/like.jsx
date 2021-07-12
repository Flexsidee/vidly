import React from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  classes += props.liked ? "" : "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
