import "../css/options.css";
const grab = (selectorStr, parent = document) =>  parent.querySelector(selectorStr)
const optionsURL="http://localhost:3001/options.html"
const userId = 1;
const notesURL="http://localhost:3000/notes/";

const folderNotesList = grab("#folder-notes-list")
const noteContainer = grab("#note-container")
const urlContainer = grab("#url-container")
const btnContainer = grab("#btn-container")

export default function() {
  let view=[];
  folderNotesList.addEventListener('click', event => {
    const clickTarget = event.target.id;
    let noteId = parseInt(clickTarget.split("-")[1]);
    if (clickTarget === `note-${noteId}`) {
  return fetch(notesURL+`${noteId}`)
  .then(r => r.json())
  .then(note => {return view.push(note)})
      }
  })
  console.log(view);
  // noteContainer.innerHTML+=`<p>${note.note}</p>`;
  // urlContainer.innerHTML+=`<p>${note.note}</p>`;
  // btnContainer.innerHTML+=`<button id=edit-${note.id}>"EDIT"<button>`
  // createWindow()


    // console.log('%c <-- options.js --> ', 'background: #222; color: orange')


      // let targetNote = usersNotes.filter(note => {return noteId === note.id})
      // createWindow()


}


const createWindow = () => {
  chrome.windows.create({url: chrome.runtime.getURL("options.html"), type:"popup", state:"normal", height:"inherit", width:"inherit"}, function(){
  })
}
