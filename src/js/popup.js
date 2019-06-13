import "../css/popup.css";
import renderNotes from "./popup/notes"

document.addEventListener("DOMContentLoaded", event => {
  console.log('%c <-- popup.js --> ', 'background: #222; color: green', event);
  const open = event.target.webkitVisibilityState
  if (open === "visible") {
    renderNotes();
  } else {
    return
    console.log("add fetch data, into conditional here")
  }
})
