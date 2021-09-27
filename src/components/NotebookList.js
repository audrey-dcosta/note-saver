import React,{useState,useEffect} from 'react'
import { Notebook } from './Notebook'
import { AddNotebook } from './AddNotebook'
import {GoPlus} from 'react-icons/go'
import {useHistory} from 'react-router-dom'
import {SkeletonNotebook} from './Skeletons/SkeletonNotebook'
import {UpdateNotebook} from './/UpdateNotebook'


export default function NotebookList() {
    const [notebooks, setNotebooks] = useState(null)
    const [notebook, setNotebook] = useState(null)
    let [isOpen,setIsOpen]= useState(false)
    let [updateOpen,setUpdateOpen]= useState(false)
    
    const history= useHistory()

    const handleClick=(id)=>{
        history.push(`/notebook/${id}`);
    }

    function toggleUpdate() {
        setUpdateOpen(!updateOpen)
      }
    function toggleModal() {
        setIsOpen(!isOpen)
      }



    useEffect(() => {
        console.log('started')
        loadNotebooks()
        
    }, [])
    function loadNotebooks(){
        fetch('http://localhost:3001/api/notebooks').then(response=>response.json()).then(result=>{
            setNotebooks(result)
            console.log(result)
        }).catch(exception=>{
            console.log(exception)
        })

    }
    
    function getNotebookById(id){
        fetch(`http://localhost:3001/api/notebook/${id}`)
        .then(response=>response.json())
        .then(result=>{
            console.log('nmo',result)
            setNotebook(result[0])
            console.log(notebook)
            toggleUpdate()
        })
    }

    function update_notebook(id){
        fetch(`http://loclhost:3001/api/notebook/${id}`,{
            method:"PUT",
        })
        .then(res=>res.text())
        .then(data=>{console.log('updated')})
        .catch(err=>console.log(err))

    }
    function createNotebook(formData){
        console.log('jjj')
        console.log(formData)
        console.log('jjj')
      fetch('http://localhost:3001/api/notebook/add',{
          method:"POST",
          // mode:"no-cors",
          body:JSON.stringify(formData),
          headers:{Accept:"application/json",
          "Content-type":"application/json"}
      }).then(response=>response.json()).then(result=>{
          console.log(result)
          toggleModal()
      }).catch(err=>{
          console.log(err)
      })
    }
  

    function delete_notebook(id){
        fetch(`http://localhost:3001/api/notebook/${id}`,{
            method:"DELETE",
        })
        .then(response=>response.text())
        .then(result=>{
            console.log('deleted')
            loadNotebooks()
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="p-1 sm:p-6 flex items-center justify-center w-full ">
        {notebooks && (
            <div className="grid grid-cols-2 items-center justify-items-center gap-1 w-full sm:w-11/12 sm:grid-cols-4 sm:gap-4 md:w-4/6">
                <div onClick={toggleModal} className="group box-content  border-4 border-dashed border-gray-200 w-full rounded-lg text-orange-550 flex flex-col justify-center items-center h-full  hover:bg-orange-550 hover:shadow-lg hover:text-white hover:border-transparent">
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
            
            {isOpen && <AddNotebook isOpen={isOpen} closeModal={toggleModal} createNotebook={createNotebook}></AddNotebook>}
            {updateOpen && <UpdateNotebook isOpen={isOpen} closeModal={toggleUpdate} notebook={notebook} updateOpen={updateOpen} update_notebook={update_notebook}></UpdateNotebook>}

    </div>
    )
}
