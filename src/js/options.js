import "../css/options.css";
const grab = (selectorStr, parent = document) =>  parent.querySelector(selectorStr)
const userId = 1;
const notesURL="http://localhost:3000/notes/";
const optionsURL="http://localhost:3001/options.html"




export default function() {

  document.addEventListener("DOMContentLoaded", event => {



  folderNotesList.addEventListener('click', event => {
    const clickTarget = event.target.id;
    let noteId = parseInt(clickTarget.split("-")[1]);

    if (clickTarget === `note-${noteId}`) {

    const view = fetch(notesURL+`${noteId}`)
                  .then(r => r.json())
                  .then(note => {
                    return note

              })}
            })



          })
          createWindow()


    // console.log('%c <-- options.js --> ', 'background: #222; color: orange')


      // let targetNote = usersNotes.filter(note => {return noteId === note.id})
      // createWindow()


}


const createWindow = () => {
  chrome.windows.create({url: chrome.runtime.getURL("options.html"), type:"popup", state:"normal", height:400, width:400}, function(){
  })
}
