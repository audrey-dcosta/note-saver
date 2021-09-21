import React,{useState,useEffect} from 'react'
import { Notebook } from './Notebook'
import {GoPlus} from 'react-icons/go'


export default function NotebookList() {
    const [notebooks, setNotebooks] = useState(null)

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
        <div className="flex items-center justify-center w-full p-6">
        {notebooks && (
            <div className=" grid grid-cols-2 gap-4 sm:grid-cols-4 ">
                <div class="group flex flex-col justify-center square items-center border-4 rounded-lg border-orange-500 hover:bg-orange-500 hover:shadow-lg hover:border-transparent text-6xl">
                <GoPlus/>
                </div>
                {notebooks.map((notebook)=><Notebook key={notebook.notebook_id} notebook={notebook}>
                    
                 </Notebook>)}
            </div>
            )}
    </div>
    )
}
