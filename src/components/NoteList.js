import React, { useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

export default function NoteList() {
    const [notes, setNotes] = useState(null)
    let {id}=useParams()

    useEffect(() => {
        getNotes()
    }, [])

    function getNotes(){
        fetch(`http://localhost:3001/api/notebook/${id}`)
        .then(response=>response.json()).then(result=>{
            setNotes(result)
            console.log(result)
        }).catch(err=>{
            console.log(err)
        })

    }

    
    return (
        <div>
            
            <h1>{id}</h1>
            
        </div>
    )
}
