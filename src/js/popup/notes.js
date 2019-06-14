const grab = (selectorStr, parent = document) =>  parent.querySelector(selectorStr)
const usersURL=`http://localhost:3000/users/`;
const notesURL="http://localhost:3000/notes";

const userId = 1;


const name = grab("#name")

const userFolderContainer = grab("#user-folder-container")
const userFolders = grab("#user-folders")
const folderNotesList = grab("#folder-notes-list")

const saveContainer = grab("#save-container")
const selectFolderOptions = grab("#select-folder-options")
const addNoteForm = grab("#add-note-form")
const textareaContainer = grab("#textarea-container")
const tabsWrapper = grab("#tabs-wrapper")


export default function(){
  fetch(usersURL+`${userId}`)
  .then(r => r.json())
  .then(user => {
    // console.log('%c <-**user-fetch**-> ', 'background: #222; color: blue', user)
    name.innerHTML+=`${user.name}`
    user.folders.forEach(folder => {
      userFolders.innerHTML+=`
        <li class="nav-item" id="folder-tab-${folder.id}">
          <a class="nav-link active">${folder.name}</a>
        </li>`
      selectFolderOptions.innerHTML+=`
        <option value="option-${folder.id}">
          ${folder.name}
        </option>`
      })
    //append tabs

    //append first folder's notes into space to start
    const startNotes = user.folders[0].notes
    folderNotesList.innerHTML="";
    startNotes.forEach(note => {
      folderNotesList.innerHTML+=`
      <tr class="notes-list-item">
        <td id="folder-note-${note.id}">
          <span>${note.note}</span>
          <span>${note.url}</span>
        </td>
      </tr>
      `
      })

//toggles notes by tab clicked
    userFolders.addEventListener('click', e => {
      let targetId = e.target.parentElement.id
      targetId = targetId.substring(targetId.length - 1)
      let targetIdx = parseInt(targetId)-1
      folderNotesList.innerHTML="";
      user.folders[targetIdx].notes.forEach(note => {
        folderNotesList.innerHTML+=`
        <tr class="notes-list-item">
          <td class="notes-list-item" id="folder-note-${note.id}">
            <span>${note.note}</span>
            <span>${note.url}</span>
          </td>
        </tr>
        `
      })
    })
  })

  saveContainer.addEventListener("submit", e => {
    e.preventDefault();
    let input = event.target.parentNode.parentElement.firstElementChild.childNodes[1]
    let inputFolder = event.target.firstElementChild.value.split("-")[1]
    let folderId = parseInt(inputFolder)

    fetch(notesURL, {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({

      })
    })
    addNoteForm.reset()
  })
  //on tabClick switch notes

}
