const Pool = require('pg').Pool
const dbconn=require('../config/databaseConnection')

const pool=new Pool(dbconn);

const getNotebooks=()=>{
    return new Promise(function(resolve,reject){
        pool.query('SELECT * FROM notebooks ORDER BY notebook_id ASC',(error,results)=>{
            if(error){
                reject(error)
            }
            resolve(results.rows)
        })
    })
}
const getNotebook=()=>{
    return new Promise(function(resolve,reject){
        const id=parseInt(request.params.id)
        pool.query('SELECT FROM notebook WHERE id= $1',[id],(error,results)=>{
            if(error){
                reject(error)
            }
            resolve(results.rows)
        })
    })
}

const createNotebook=(body)=>{
    return new Promise(function(resolve,reject){
        const {name,description}=body
        pool.query('INSERT INTO notebooks (name,description) VALUES ($1,$2) RETURNING *',[name,description],(error,results)=>{
            if(error){
                reject(error)
            }
            resolve(`notebook added:${results.rows[0]}`)
        })
    })
}

const deleteNotebook=()=>{
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

const updateNotebook=async=>{
    try{
        const id=parseInt(request.params.id)
        const name=parseInt(request.params.name)
        pool.query('UPDATE notebook SET name=$1 WHERE id=$2',[id,name],(error,results)=>{
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
    getNotebooks,
    getNotebook,
    createNotebook,
    deleteNotebook,
    updateNotebook,
}