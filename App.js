import React from "react";
import ReactDOM from "react-dom/client";

const heading1= React.createElement("h1",{
    id: "title",
    className: "class"
 },"Namaste React");
 const heading2 = React.createElement("h1",{id: "title2"},"Namaste part2");
 const container=  React.createElement("div",{id: "container"},[heading1,heading2]);
 console.log(container);
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(container);

//  all bundlers minified the code , clear the console , lots of optimization
// parcel , vite 