import React,{ Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export const UpdateNotebook = ({updateOpen,toggleUpdate,notebook,update_notebook,id}) => {
  const [formData,updateFormData]=useState()
  
  const handleChange=(e)=>{
    e.preventDefault()
    updateFormData({
      ...formData,
      [e.target.name]:e.target.value.trim()
    })
    console.log(formData)
}

    return (
        <>
        <Transition appear show={updateOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={toggleUpdate}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
              </Transition.Child>
  
              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-gray-900"
                  >
                    Update Notebook
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={()=>update_notebook(formData,notebook.notebook_id)}>
                      <input name="name" onChange={handleChange} defaultValue={notebook.notebook_name} className="p-2 my-4 ring-2 text-xl ring-gray-300 rounded-lg w-full focus:outline-none focus:ring-orange-550" type="text" placeholder="Enter Notebook name"/>
                      <textarea name="description" onChange={handleChange} defaultValue={notebook.notebook_desc} className="p-2 my-4 ring-2 text-xl ring-gray-300 rounded-lg w-full focus:outline-none focus:ring-orange-550" placeholder="Description"/>
                      {/* <div className="flex space-x-4">
                      <input className="p-2 my-4 ring-2 text-xl ring-gray-300 rounded-lg w-full focus:outline-none focus:ring-orange-550" type="text" placeholder="Add Tag"/>
                      <button className="ring-2 bg-orange-550 ring-orange-550 my-4 p-1 text-gray-50 rounded-lg font-medium px-3 text-3xl">+</button>
                      </div> */}
                    </form>
                  </div>
  
                  <div className="mt-4 flex justify-end space-x-4">
                  <button
                      type="button"
                      onClick={toggleUpdate}
                      className="inline-flex justify-center px-4 py-2 text-lg font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-orange-550 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      
                    >
                      Cancel
                    </button>
                    <button
                      onClick={()=>update_notebook(formData,notebook.notebook_id)}
                      type="Submit"
                      className="inline-flex justify-center px-4 py-2 text-lg font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-orange-550 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      
                    >
                      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
  </svg>
                      Update
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
  
    )
}
