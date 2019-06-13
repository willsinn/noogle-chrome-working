const usersURL = "http://localhost:3000/users/"
const grab = (selectorStr, parent = document) =>  parent.querySelector(selectorStr)


const userId = 1;
const name = grab("#name")
const userFolderContainer = grab("#user-folder-container")
const userFolders = grab("#user-folders")
const folderNotesList = grab("#folder-notes-list")


export default function(){
  fetch(usersURL+`${userId}`)
  .then(r => r.json())
  .then(user => {
    // console.log('%c <-**user-fetch**-> ', 'background: #222; color: blue', user)
    name.innerHTML+=`${user.name}`
    user.folders.forEach(folder => {
      userFolders.innerHTML+=`
        <li id="folder-tab-${folder.id}">
          <div>${folder.name}</div>
        </li>
        `
        //append tabs
      })
    const startingFolder = user.folders[0].notes
    //append first folder's notes into space to start
    startingFolder.forEach(note => {
      folderNotesList.innerHTML=`
        <li id="folder-note-${note.id}">
          <span>${note.note}</span>
          <span>${note.url}</span>
        </li>
        `
    })
    userFolders.addEventListener('click', event => {
      let targetId = event.target.parentElement.id
      targetId = targetId.substring(targetId.length - 1)
      const targetIdx = parseInt(targetId)-1
      const targetFolder = user.folders[targetIdx].notes
      targetFolder.forEach(note => {
        folderNotesList.innerHTML=`
          <li id="folder-note-${note.id}">
            <span>${note.note}</span>
            <span>${note.url}</span>
          </li>
          `
      })
    })
  })

  //on tabClick switch notes


}
