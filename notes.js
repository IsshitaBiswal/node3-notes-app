const fs = require('fs')
const chalk = require('chalk')

// const getNotes= () => {
//    return 'Your Notes...'
// }

const addNote = (title,body) => {
   const notes = loadNotes()
   //  const duplicateNotes = notes.filter(function(note){
   //     return note.title === title
   //  })
   // const duplicateNotes = notes.filter((note) => note.title === title)
   const duplicateNote = notes.find((note) => note.title === title)

   // debugger 
   
   //  if(duplicateNotes.length === 0){
   // notes.push({
   //    title:title,
   //    body:body
   // })
   
   // if(duplicateNote === undefined){
   //    notes.push({
   //       title:title,
   //       body:body
   //    })

   if(!duplicateNote){
      notes.push({
         title:title,
         body:body
      })
   saveNotes(notes)
   console.log(chalk.green.inverse('New note added!'))
   } else{
     console.log(chalk.red.inverse('Note title is already taken!'))
   
   }
}

const removeNote =  (title) => {
   const notes = loadNotes()
   // const notesToKeep = notes.filter(function(note){
   //    return note.title !== title
   // })
   const notesToKeep = notes.filter((note) => note.title !== title)
   
   if(notes.length > notesToKeep.length){
      console.log(chalk.green.inverse('Note removed!'))
      saveNotes(notesToKeep)
   } else {
      console.log(chalk.red.inverse('No note found!'))
   }



}
 
const listNotes = () => {
    const notes = loadNotes()
     console.log(chalk.inverse('Your Notes'))
     notes.forEach((note) => {
        console.log(note.title)
     })
}

const readNote = (title) =>{
   const notes = loadNotes()
   const note = notes.find((note) => note.title === title)
  
   if(note){
      console.log(chalk.inverse(note.title))
      console.log(note.title)
   } else {
      console.log(chalk.inverse.red('Note not found!'))
   }
}
const saveNotes = (notes) =>{
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json',dataJSON)

}

const loadNotes = () => {
   try{
   const dataBuffer = fs.readFileSync('notes.json')
   const dataJSON = dataBuffer.toString()
   return JSON.parse(dataJSON)
   } catch (e) {
    return []
   }
}






// module.exports = getNotes
module.exports = {
   // getNotes: getNotes,
   addNote: addNote,
   removeNote: removeNote,
   listNotes:listNotes,
   readNote:readNote
}
