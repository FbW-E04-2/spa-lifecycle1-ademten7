import React from "react";

const NotFound = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg"
          alt=""
          width="500"
          height="500"
        />
      </div>
      <button onClick={() => props.history.push("/")}>Home Page</button>
    </div>
  );
};

export default NotFound;
