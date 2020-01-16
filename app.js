const getNotes = require('./notes')
const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    title: {
        describe: 'Note body',
        demandOption: true,
        type: 'string'
    },

    handler: function (argv){
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function (){
        console.log('Removing a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function (){
        console.log('Listing  a note')
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function (){
        console.log('Reading  a note')
    }
})
yargs.parse()
console.log(yargs.argv)