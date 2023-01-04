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

// Variables
let str = "sanskriti"

// JSX
const jsxHeading = (
  <h1 id="newJSXheading" key={"jsxKey"}>
    Hi this is rendered through JSX
  </h1>
);

const JsxHeading2 = ()=>{
  return (
    <p id="newJSXheading2" key={"jsxKey2"}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  );
}

const HeaderComponent = () =>{
  return (<h1 id="header" key="head-key">Header</h1>);
}

// functional component--> 
const ContainerComponent = () =>{
  return (
    <div id="body-container" key="body-cont">
      {/* multiline comment in JSX */}
      <JsxHeading2 key = "hello"></JsxHeading2> 
      <h1 key = {"sans1"}>React -- functional component</h1>
      <h2 key = {"sans2"}>React h2 -- functional component</h2>
    </div>
  );
}

const FooterComponent = () =>{
  return (
    <p id="footer" key="footer">Footer &#169; </p>
  )
}
// we can call the functional component in few different ways
// <HeaderComponent/>
// HeaderComponent()
// <HeaderComponent></HeaderComponent> 

const container = React.createElement("div", { id: "container" , key:"ds"}, [
  <HeaderComponent></HeaderComponent>,
  jsxHeading, 
  <ContainerComponent></ContainerComponent>, //<headerComponent></headerComponent>
  FooterComponent()
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
