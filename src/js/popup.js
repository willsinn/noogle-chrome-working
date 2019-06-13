import "../css/popup.css";
import render from "./popup/notes"
import windowId from "./background"


document.addEventListener("DOMContentLoaded", event => {
  console.log(event);
  const open = event.target.webkitVisibilityState
  if (open === "visible") {
    render();
  } else {
    return chrome.app.window.current().onClosed(event => {
      console.log('%c RETURN POP-UP INFO ', 'background: #222; color: red');
    })

  }
})
