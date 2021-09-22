const dbconn=require('../config/databaseConnection')
const {Pool}=require('pg')
const pool=new Pool(dbconn)
pool.connect(err=>{
    if(err){
        console.log('connection error',err.stack)
    }
    else{
        console.log('connected')
    }
})

const getAllNotes= async (req, res) => {
    try{
    const { rows } = await pool.query('SELECT * FROM notebooks ORDER BY notebook_id ASC')
    res.send(rows)
    }
    catch(err){
        res.send(err.message)
        console.log(err.message)
    }
}
const getNotesInNotebook= async (req, res) => {
    try{
    const id=req.params.id
    const { rows } = await pool.query('SELECT * FROM notes WHERE notebook_id=$1 ORDER BY note_id ASC',[id])
    res.send(rows)
    }
    catch(err){
        res.send(err.message)
        console.log(err.message)
    }
}

const addNote =async (req, res) => {
    try{
        const id=req.params.id
        const {title,content}=req.body
        const createdAt=new Date()
        console.log(createdAt)
        const { rows } = await pool.query('INSERT INTO notes (notebook_id,note_title,note_content,"note_createdAt") VALUES ($1,$2,$3,$4) RETURNING *',[id,title,content,createdAt])
        console.log(`notebook added:${rows}`)
        res.send(rows)

    }
    catch(err){
        res.send(err.message)
        console.log(err.message)
    }
}
const deleteNote= async (req, res) => {
    try{
        const id=parseInt(req.params.id)
        const { rows } = await pool.query('DELETE FROM notes WHERE note_id=$1',[id])
        console.log(`deleted note at:${id}`)
        res.send(`deleted note at:${id}`)

    }
    catch(err){
        res.send(err.message)
        console.log(err.message)
    }
}
const updateNote= async (req, res) => {
    try{
        const id=parseInt(req.params.id)
        const {title}=req.body
        const { rows } = await pool.query('UPDATE notebooks SET note_title=$1 WHERE note_id=$2',[title,id])
        console.log(`updated note at id:${id}`)
        res.send(`updated note at id:${id}`)

    }
    catch(err){
        res.send(err.message)
        console.log(err.message)
    }
}


module.exports={
    getAllNotes,
    getNotesInNotebook,
    addNote,
    deleteNote,
    updateNote
}