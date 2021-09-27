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

const getNotebooks= async (req, res) => {
    try{
    const { rows } = await pool.query('SELECT * FROM notebooks ORDER BY notebook_id ASC')
    res.send(rows)
    }
    catch(err){
        res.send(err.message)
        console.log(err.message)
    }
}

const getNotebook= async (req, res) => {
    try{
        const { id } = req.params
        console.log(id)
        const { rows } = await pool.query('SELECT * FROM notebooks where notebook_id=$1',[id])
        console.log(rows)
        res.send(rows)
    }
    catch(err){
        res.send(err.message)
        console.log(err.message)
    }
}

const createNotebook= async (req, res) => {
    try{
        const {name,description}=req.body
        const createdAt=new Date()
        console.log(createdAt)
        const { rows } = await pool.query('INSERT INTO notebooks (notebook_name,notebook_desc,"notebook_createdAt") VALUES ($1,$2,$3) RETURNING *',[name,description,createdAt])
        console.log(`notebook added:${rows}`)
        res.send(rows)

    }
    catch(err){
        res.send(err.message)
        console.log(err.message)
    }
}
const deleteNotebook= async (req, res) => {
    try{
        const id=parseInt(req.params.id)
        const { rows } = await pool.query('DELETE FROM notebooks WHERE notebook_id=$1',[id])
        console.log(`deleted notebook at:${id}`)
        res.send(`deleted notebook at:${id}`)

    }
    catch(err){
        res.send(err.message)
        console.log(err.message)
    }
}
const updateNotebook= async (req, res) => {
    try{
        const id=parseInt(req.params.id)
        const {name,description}=req.body
        console.log('hh',name)
        console.log('mm',description)
        const { rows } = await pool.query('UPDATE notebooks SET notebook_name=$1,notebook_desc=$2 WHERE notebook_id=$3',[name,description,id])
        console.log(`updated notebook at:${id}`)
        res.send(`updated notebook at:${id}`)

    }
    catch(err){
        res.send(err.message)
        console.log(err.message)
    }
}


module.exports={
    getNotebooks,
    getNotebook,
    createNotebook,
    deleteNotebook,
    updateNotebook
}