const notebook = require('../models/notebook_model')
const note = require('../models/note_model')
router=require('express').Router()

/*router for notebooks */
router.get('/notebooks', notebook.getNotebooks)
router.post('/notebook/add', notebook.createNotebook)
router.delete('/notebook/:id', notebook.deleteNotebook)
router.put('/notebook/:id', notebook.updateNotebook)

router.get('/notebook/:id', note.getNotesInNotebook)

/*router for notes */
router.get('/notes', note.getAllNotes)
router.get('/note/:id', note.getNoteById)
router.post('/note/add', note.addNote)
router.delete('/note/:id', note.deleteNote)
router.put('/note/:id', note.updateNote)


module.exports=router