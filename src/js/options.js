import "../css/options.css";
const grab = (selectorStr, parent = document) =>  parent.querySelector(selectorStr)
const optionsURL="http://localhost:3001/options.html"
const userId = 1;
const notesURL="http://localhost:3000/notes";

const folderNotesList = grab("#folder-notes-list")


export default function() {
  console.log('%c <-- options.js --> ', 'background: #222; color: orange')
  const usersNotes = []
  fetch(notesURL)
  .then(r => r.json())
  .then(notes => {
    notes.map(note => {
      if (note.user_id === userId) {
        usersNotes.push(note)
      }
    })
  })
  console.log(usersNotes);
  folderNotesList.addEventListener('click', event => {
    chrome.windows.create({url: chrome.runtime.getURL("options.html"), type:"panel"} , function(){
    })
  })

}
