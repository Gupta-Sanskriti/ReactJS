/*
  --> HMR - HOT module replacement
  --> File watcher algorithmn - C++
  --> Bundling 
  --> minify
  --> Cleaning our code 
  --> Dev and production build
  --> Super fast build algorithmn 
  --> parcel takes care of image optimisation
  --> Parcel caches while development
  --> compatible with olders version of browser
  --> Enable HTTPS on developer machine
  --> parcel manages the port number
  --> consistent hashing algorithmn that parcel uses to cache things up 
  --> PARCEL is a zero config bundler
  --> Tree shaking -- removing unwanted code (it removes unused codes and removes console.logs, if we are using a liabrary and we are using 2 functions of it and then other 8 are ignored by parcel)
  --> transitive dependency
*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading ", key: "key1" },
  "Hello"
);
const heading2 = React.createElement(
  "h2",
  {
    name: "sanskriti",
    age: "23",
    key: "key2",
  },
  "sanskriti"
);


// JSX
const jsxHeading = (
  <h1 id="newJSXheading" key="jsxKey">
    Hi this is rendered through JSX
  </h1>
);

let str = "sanskriti"

const JsxHeading2 = ()=>{
  return (
    <h2 id="newJSXheading2" key="jsxKey2">
      Hi this is rendered through JSX 2
    </h2>
  );
}

// functional component--> 
const headerComponent = () =>{
  return (
    <div>
      {/* multiline comment in JSX */}
      {[<JsxHeading2 key = "hello"></JsxHeading2>, `${str} ${1+2}`] }
      <h1 key = "sans1">React -- functional component</h1>
      <h2 key = "sans2">React h2 -- functional component</h2>
    </div>
  );
}

const container = React.createElement("div", { id: "container" , key:"ds"}, [
  jsxHeading, <headerComponent></headerComponent> //<headerComponent></headerComponent>
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
