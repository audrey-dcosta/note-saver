import React,{useState,useEffect} from 'react'
import { Notebook } from './Notebook'
import {GoPlus} from 'react-icons/go'
import {Redirect,useParams,useHistory,generatePath} from 'react-router-dom'
import {SkeletonNotebook} from './Skeletons/SkeletonNotebook'


export default function NotebookList() {
    const [notebooks, setNotebooks] = useState(null)
    const [isRedirect, setIsRedirect] = useState(false)
    const [id, setId] = useState()
    const history= useHistory()

    const handleClick=(id)=>{
        history.push(`/notebook/${id}`);
    }


    useEffect(() => {
        console.log('started')
        fetch('http://localhost:3001/api/notebooks').then(response=>response.json()).then(result=>{
            setNotebooks(result)
            console.log(result)
        }).catch(exception=>{
            console.log(exception)
        })
    }, [])

    return (
        <div className="p-1 sm:p-6 flex items-center justify-center w-full ">
        {notebooks && (
            <div className=" grid grid-cols-2 auto-rows-max gap-1 sm:grid-cols-4 sm:gap-4">
                <div class="group text-3xl text-orange-550 flex flex-col justify-center items-center border-4 rounded-lg border-orange-550 hover:bg-orange-550 hover:shadow-lg hover:text-white hover:border-transparent">
                <GoPlus/>
                </div>
                {notebooks.map((notebook)=><Notebook key={notebook.notebook_id} notebook={notebook} handleClick={handleClick}>
                    
                 </Notebook>)}

            </div>

            )}
             {!notebooks && (
                <div className="grid grid-cols-2 items-center justify-items-center gap-1 w-full sm:w-11/12 sm:grid-cols-4 sm:gap-4 md:w-4/6">
                    {[1,2,3,4,5,6,7,8].map((i)=><SkeletonNotebook key={i}/>)}
                </div>
                )}
    {isRedirect?<Redirect to={`/notebook/:${id}`}/>:null}
    </div>
    )
}
