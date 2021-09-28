import React,{useState,useEffect} from 'react'
import { Notebook } from './Notebook'
import { AddNotebook } from './AddNotebook'
import {GoPlus} from 'react-icons/go'
import {useHistory} from 'react-router-dom'
import {SkeletonNotebook} from './Skeletons/SkeletonNotebook'
import {UpdateNotebook} from './UpdateNotebook'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NotebookList() {
    const [notebooks, setNotebooks] = useState(null)
    const [notebook, setNotebook] = useState(null)
    let [createOpen,setCreateOpen]= useState(false)
    let [updateOpen,setUpdateOpen]= useState(false)
    const headers={Accept:"application/json", "Content-type":"application/json"}
    const history= useHistory()

    useEffect(() => {
        console.log('started')
        loadNotebooks()
    }, [])

    const notify = (text) => toast.success(text);
    const handleClick=(id)=>history.push(`/notebook/${id}`);
    const toggleUpdate=()=>setUpdateOpen(!updateOpen)
    const toggleCreate=()=>setCreateOpen(!createOpen)

    function getNotebookById(id){
        fetch(`http://localhost:3001/api/notebook/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setNotebook(data[0])
            console.log(notebook)
            toggleUpdate()
        })
    }
    function createNotebook(formData){
      fetch('http://localhost:3001/api/notebook/add',{
          method:"POST",
          body:JSON.stringify(formData),
          headers:headers
      }).then(res=>res.json()).then(result=>{
          toggleCreate()
          notify(`created Notebook ${formData.name}`)
      }).catch(err=>{
          console.log(err)
      })
    }
    function loadNotebooks(){
        fetch('http://localhost:3001/api/notebooks').then(response=>response.json()).then(result=>{
            setNotebooks(result)
            console.log(result)
        }).catch(exception=>{
            console.log(exception)
        })
    }
    function update_notebook(formData,id){
      fetch(`http://localhost:3001/api/notebook/${id}`,{
          method:"PUT",
          body:JSON.stringify(formData),
          headers:headers
      }).then(res=>{
          console.log(res)
          toggleUpdate()
          notify('updated Notebook')
          loadNotebooks()
      }).catch(err=>{
          console.log(err)
      })
    }
    function delete_notebook(id){
        fetch(`http://localhost:3001/api/notebook/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.text())
        .then(result=>{
            notify('Deleted Notebook')
            loadNotebooks()
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="p-1 sm:p-6 flex items-center justify-center w-full ">
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
            
        {notebooks && (
            <div className="grid grid-cols-2 items-center justify-items-center gap-1 w-full sm:w-11/12 sm:grid-cols-4 sm:gap-4 md:w-4/6">
                <div onClick={toggleCreate} className="group box-content  border-4 border-dashed border-gray-200 w-full rounded-lg text-orange-550 flex flex-col justify-center items-center h-full  hover:bg-orange-550 hover:shadow-lg hover:text-white hover:border-transparent">
                <div className="p-2 items-center text-2xl flex space-x-2">
                <GoPlus/>
                <span>Notebook</span>
                </div>
                </div>
                {notebooks.map((notebook)=><Notebook key={notebook.notebook_id} notebook={notebook} handleClick={handleClick} delete_notebook={delete_notebook} getNotebookById={getNotebookById}>
                    
                 </Notebook>)}

            </div>
            )}
             {!notebooks && (
                <div className="grid grid-cols-2 items-center justify-items-center gap-1 w-full sm:w-11/12 sm:grid-cols-4 sm:gap-4 md:w-4/6">
                    {[1,2,3,4,5,6,7,8].map((i)=><SkeletonNotebook key={i}/>)}
                </div>
                )}
            
            {createOpen && <AddNotebook createOpen={createOpen} toggleCreate={toggleCreate} createNotebook={createNotebook}></AddNotebook>}
            {updateOpen && <UpdateNotebook toggleUpdate={toggleUpdate} notebook={notebook} updateOpen={updateOpen} update_notebook={update_notebook}></UpdateNotebook>}

    </div>
    )
}
