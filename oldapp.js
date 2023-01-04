// Old way of creating the react app without using parcel or babel or JSX

import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  { id: "heading1", key: "head1" },
  "Hello this is the traditional way of creating react app"
);
const paragraph = React.createElement(
  "p",
  { id: "para1", key: "para1", className: "newPara" },
  "Hello this is a paragraph"
);

const container = React.createElement("div", { id: "container" }, [
  heading,
  paragraph,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
