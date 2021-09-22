import React, { useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Note} from './Note'

export default function NoteList() {
    const [notes, setNotes] = useState(null)
    let {id}=useParams()

    useEffect( () => {
        loadDatas()
    }, [])

    const loadDatas=()=>{
        console.log('started')
        fetch('http://localhost:3001/api/notebook/7')
        .then(response=>response.json())
        .then(result=>{
            setNotes(result)
            console.log(result)
        })
        .catch(exception=>{
            console.log(exception)
        })
    }


    
    return (
        <div>
            <div>
                <div className="m-2 bg-gray-100 rounded-lg">
                    <p></p>
                    {notes && (<h1>{notes.map(note=><Note key={note.note_id} note={note}/>)} </h1>)}
                </div>
            </div>
        </div>
    )
}
