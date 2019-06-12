import "../css/popup.css";
import render from "./popup/notes"
import windowId from "./background"


document.addEventListener("DOMContentLoaded", event => {
  console.log(event);
  const open = event.target.webkitVisibilityState
  if (open === "visible") {
    render();
  } else {
    return function(){console.log("hi")}
  }
})
