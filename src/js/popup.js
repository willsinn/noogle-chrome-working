import "../css/popup.css";
import renderNotes from "./popup/notes.js"
import options from './options.js'



document.addEventListener("DOMContentLoaded", event => {
  console.log('%c <-- popup.js --> ', 'background: #222; color: green', event);
  const open = event.target.webkitVisibilityState
  if (open === "visible") {
    renderNotes()
    options()
  }
})

// chrome.app.window.current().onClosed.addListener(event => {console.log()})
