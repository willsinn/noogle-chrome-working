import "../css/popup.css";
import renderNotes from "./popup/notes"
import windowId from "./background"


document.addEventListener("DOMContentLoaded", event => {
  console.log('%c <-- DCL popup.js --> ', 'background: #222; color: green');

  console.log(event);
  const open = event.target.webkitVisibilityState
  if (open === "visible") {
    renderNotes();
  } else {
    return console.log("add fetch data, into conditional here")
  }
})
