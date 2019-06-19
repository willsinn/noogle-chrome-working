import "../css/popup.css";
import renderNotes from "./popup/notes"
import options from './options.js'
const grab = (selectorStr, parent = document) =>  parent.querySelector(selectorStr)
const folderNotesList = grab("#folder-notes-list")

document.addEventListener("DOMContentLoaded", event => {
  renderNotes()

  console.log('%c <-- popup.js --> ', 'background: #222; color: green', event);
  const isOpen = event.target.webkitVisibilityState
  if (isOpen === "visible") {
    options()
  }
})

// chrome.app.window.current().onClosed.addListener(event => {console.log()})




// document.addEventListener("DOMContentLoaded", event => {
//
//   console.log('%c <-- popup.js --> ', 'background: #222; color: green', event);
//   const open = event.target.webkitVisibilityState
//   if (open === "visible") {
//     renderNotes()
//   }
// })
