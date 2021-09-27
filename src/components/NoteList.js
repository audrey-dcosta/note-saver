import React, { useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Note} from './Note'
import { SkeletonNote } from './Skeletons/SkeletonNote'

export default function NoteList() {
    const [notes, setNotes] = useState(null)
    let {id}=useParams()

    useEffect( () => {
        loadNotes()
    }, [])

    const loadNotes=()=>{
        console.log('started')
        fetch('http://localhost:3001/api/notebookNotes/7')
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
        <div className="flex flex-col items-center p-4 h-full">
            <div className="w-full sm:w-4/6 p-2 flex flex-col bg-white h-full rounded-xl items-stretch">
                {/* <div className="p-2 bg-white h-full"> */}
                    {notes && (<div><h1 className="text-3xl pl-2 font-medium">React</h1>{notes.map(note=><Note key={note.note_id} note={note}/>)} </div>)}
                    {!notes && (<SkeletonNote></SkeletonNote>)}

                {/* </div> */}
            </div>
        </div>
    )
}
