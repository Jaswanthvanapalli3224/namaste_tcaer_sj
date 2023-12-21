const heading = React.createElement(
  "div", // element name
  { id: "sub-root" }, //attributes
  React.createElement("div",
   { id: "subbed-root" }, 
   [
    React.createElement("h2", 
    { id: "heading-king" }, 
    "Hello Kings OF Coding!"),
    
    React.createElement(
      "h2",
      { id: "heading-queen" },
      "Hello Queens OF Coding!"
    ),
  ]) //children
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
