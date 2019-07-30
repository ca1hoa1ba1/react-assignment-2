import React from "react";

const charComponent = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    textAlign: "center"
  };

  return (
    <div style={style} onClick={props.onclick}>
      {props.char}
    </div>
  );
};

export default charComponent;
