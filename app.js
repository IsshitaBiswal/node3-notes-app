// const fs = require('fs')

//fs.writeFileSync('notes.txt','God,please bless me  !')

// fs.appendFileSync('notes.txt','I will be greatfull to you.')

//const firstName = require('./utils.js')

//console.log(firstName)

// const add = require('./utils.js')
// const sum = add(4,-2)
// console.log(sum)

//const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
//const getNotes = require('./notes.js')
const notes = require('./notes.js')




// const msg =  getNotes ()
// console.log(msg)

//console.log(validator.isEmail('andrew@gmail.com'))

//console.log(validator.isURL('https://mead.io'))

// const greenMsg =chalk.green('Success!')
// console.log(greenMsg)

// const greenMsg1 =chalk.green.bold('Success!')
// console.log(greenMsg1)

// const greenMsg2 =chalk.bold.green('Success!')
// console.log(greenMsg2)
// order doesnot matter

// const greenMsg3 =chalk.green.inverse.bold('Success!')
// console.log(greenMsg3)

// const command = process.argv[2]

// if(command === 'add'){
//     console.log("Adding Note!")
// }else if(command === 'delete'){
//     console.log("deleting Note!")
// }

// console.log(process.argv)
//console.log(yargs.argv)

//Customize yargs version
yargs.version('1.1.0')

// Create Add Command 
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    // handler:function(argv){
    //     console.log('Title:'+argv.title)
    //     console.log('Body:'+argv.body)
    // }
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

// Create Remove Command 
yargs.command({
    command:'remove',
    describe:'Remove a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
// Create List Command 
yargs.command({
    command:'list',
    describe:'List a new note',
    handler() {
        notes.listNotes()
    }
})

// Create Read Command 
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


//console.log(yargs.argv)
yargs.parse()