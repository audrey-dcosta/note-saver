import React, { useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Note} from './Note'
import { SkeletonNote } from './Skeletons/SkeletonNote'
import {HiPlus} from 'react-icons/hi'
import { CreateNote } from './CreateNote'
import { UpdateNote } from './UpdateNote'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function NoteList() {
    const [notes, setNotes] = useState(null)
    const [note, setNote] = useState(null)
    let {id}=useParams()
    const[createOpen,setCreateOpen]=useState(false)
    let [updateOpen,setUpdateOpen]= useState(false)

    const headers={Accept:"application/json", "Content-type":"application/json"}

    const toggleCreate=()=>setCreateOpen(!createOpen)
    const toggleUpdate=()=>setUpdateOpen(!updateOpen)

    useEffect( () => {
        loadNotes()
    }, [])

    const notify = (text) => toast.success(text);

    function get_note(id){
        fetch(`http://localhost:3001/api/note/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setNote(data[0])
            console.log(note)
            toggleUpdate()
        })
    }

    function createNote(formData){
        formData.id=id
        fetch('http://localhost:3001/api/note/add',{
            method:"POST",
            body:JSON.stringify(formData),
            headers:headers
        }).then(res=>res.json()).then(result=>{
            loadNotes()
            toggleCreate()
            notify(`created Note ${formData.name}`)
        }).catch(err=>{
            console.log(err)
        })
      }

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

    function update_note(formData,id){
        fetch(`http://localhost:3001/api/note/${id}`,{
            method:"PUT",
            body:JSON.stringify(formData),
            headers:headers
        }).then(res=>{
            console.log(res)
            toggleUpdate()
            notify('updated Notebook')
            loadNotes()
        }).catch(err=>{
            console.log(err)
        })
      }

    function delete_note(id){
        fetch(`http://localhost:3001/api/note/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.text())
        .then(result=>{
            notify('Deleted Note')
            loadNotes()
        }).catch(err=>{
            console.log(err)
        })
    }


    
    return (
        <div className="flex flex-col items-center p-4 h-full">
            <ToastContainer 
            progressClassName={{ backgroundColor: "crimson" }}
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
            <div className="w-full sm:w-4/6 p-6 sm:p-4 flex flex-col bg-white h-full rounded-xl items-stretch">
                {/* <div className="p-2 bg-white h-full"> */}
                    {notes && (<div><div className="flex justify-between "><span className="text-3xl pl-2 font-medium">React</span><button><HiPlus onClick={toggleCreate} className="text-4xl hover:text-orange-550"/></button></div>
                        {notes.map(note=><Note key={note.note_id} note={note} delete_note={delete_note} get_note={get_note}/>)} </div>)}
                    {!notes && (<SkeletonNote></SkeletonNote>)}

                {/* </div> */}

            </div>
            {createOpen && <CreateNote createOpen={createOpen} toggleCreate={toggleCreate} createNote={createNote}/>}
            {updateOpen && <UpdateNote updateOpen={updateOpen} toggleUpdate={toggleUpdate} update_note={update_note} note={note}/>}

        </div>
    )
}
