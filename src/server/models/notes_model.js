const Pool = require('pg').Pool
const dbconn=require('../config/databaseConnection')
const pool=new Pool(dbconn);

const getNotes=()=>{
    return new Promise(function(resolve,reject){
        pool.query('SELECT * FROM notes ORDER BY notebook_id ASC',(error,results)=>{
            if(error){
                reject(error)
            }
            resolve(results.rows)
        })
    })
}

const getNote=()=>{
    return new Promise(function(resolve,reject){
        const id=parseInt(request.params.id)
        pool.query('SELECT FROM notes WHERE id= $1',[id],(error,results)=>{
            if(error){
                reject(error)
            }
            resolve(results.rows)
        })
    })
}

const createNote=(body)=>{
    return new Promise(function(resolve,reject){
        const {name,description}=body
        pool.query('INSERT INTO notes (name,content) VALUES ($1,$2) RETURNING *',[name,description],(error,results)=>{
            if(error){
                reject(error)
            }
            resolve(`notebook added:${results.rows[0]}`)
        })
    })
}

const deleteNote=()=>{
    return new Promise(function(resolve,reject){
        const id=parseInt(request.params.id)
        pool.query('DELETE FROM notebooks WHERE id=$1',[id],(error,results)=>{
            if(error){
                reject(error)
            }
            resolve(`notebook deleted with id:${id}`)
        })
    })
}

const updateNote=async=>{
    try{
        const id=parseInt(request.params.id)
        const name=parseInt(request.params.name)
        pool.query('UPDATE NOTE SET name=$1 WHERE id=$2',[id,name],(error,results)=>{
            if (error) {
                console.log(error)
            }
            console.log(`note deleted with id ${id}`)
        })
    }
    catch(err){
        console.log(err)
    }
    
}

module.exports={
    getNotes,
    getNote,
    createNote,
    deleteNote,
    updateNote
}