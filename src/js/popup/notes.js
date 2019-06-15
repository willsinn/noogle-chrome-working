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



//helper that changes display notes
const notesListArray = document.querySelectorAll("#folder-notes-list .notes-list-item")
const changeDisplayNotes = (targetNotes) => {
  notesListArray.forEach((noteTr, index) => {
    noteTr.children[0].innerHTML=""
    const note = targetNotes.map((note, idx) => {
      const displayNote = truncateString(note.note, 50)
      if (index === idx){
        noteTr.children[0].innerHTML+=`<span>${displayNote}...</span>
        <button id="note-${note.id}">view</button>
        `
      }
    })
  })
}

//helper for string limits
const truncateString = (string, maxVal) => {
  return string.substring(0, maxVal)
}



//re-append folder-tabs to DOM

export default function(){
  fetch(usersURL+`${userId}`)
  .then(r => r.json())
  .then(user => {
    // console.log('%c <-**user-fetch**-> ', 'background: #222; color: blue', user)
    name.innerHTML+=`${user.name}`
    user.folders.forEach(folder => {
    let tabName = truncateString(folder.name, 10)
      userFolders.innerHTML+=`
        <li class="nav-item" id="folder-tab-${folder.id}">
          <a class="nav-link">${tabName}</a>
        </li>`
      selectFolderOptions.innerHTML+=`
        <option value="option-${folder.id}">
          ${tabName}
        </option>`

      })
    //append tabs

    //append first folder's notes into space to start
    const startNotes = user.folders[0].notes
    changeDisplayNotes(startNotes)

//toggles notes by tab clicked
    userFolders.addEventListener('click', e => {

      let targetId = e.target.parentElement.id
      targetId = targetId.substring(targetId.length - 1)
      let targetIdx = parseInt(targetId)-1
      let targetFolderNotes = user.folders[targetIdx].notes

      changeDisplayNotes(targetFolderNotes)

      userFolders.innerHTML="";
      user.folders.forEach(folder => {
      let tabName = truncateString(folder.name, 10)
      userFolders.innerHTML+=`
          <li class="nav-item" id="folder-tab-${folder.id}">
            <a class="nav-link">${tabName}</a>
          </li>`
      })
      let selected = [...user.folders].splice(targetIdx, 1)
      const selectedTab = userFolders.querySelector(`#folder-tab-${selected[0].id}`)
      let selectedName = truncateString(selected[0].name, 10)
      selectedTab.innerHTML="";
      selectedTab.innerHTML+=`<a id="toggle-selected-tab">${selectedName}</a>`

    })
  })

  saveContainer.addEventListener("submit", e => {
    e.preventDefault();
    const input = event.target.parentNode.parentElement.firstElementChild.childNodes[1]
    const folderId = parseInt(event.target.firstElementChild.value.split("-")[1])

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
