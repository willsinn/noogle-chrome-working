import "../css/popup.css";
import renderNotes from "./popup/notes.js"
import options from './options.js'
const grab = (selectorStr, parent = document) =>  parent.querySelector(selectorStr)
const folderNotesList = grab("#folder-notes-list")


renderNotes()

document.addEventListener("DOMContentLoaded", event => {
  console.log('%c <-- popup.js --> ', 'background: #222; color: green', event);
  const isOpen = event.target.webkitVisibilityState
  if (isOpen === "visible") {
    options()
  }


})


// chrome.windows.onFocusChanged.addListener()

// chrome.app.window.current().onClosed.addListener(event => {console.log()})
