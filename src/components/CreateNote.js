import React,{ Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export const CreateNote = ({createOpen,toggleCreate,createNote}) => {
    const initialFormData=Object.freeze({name:'',description:''})
    const [formData,updateFormData]=useState(initialFormData)
    
    const handleChange=(e)=>{
      e.preventDefault()
      updateFormData({
        ...formData,
        [e.target.name]:e.target.value
      })
      console.log(formData)
  }
    return (
        <>
        <Transition appear show={createOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={toggleCreate}
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
                    Create Note
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={()=>createNote}>
                      <input name="title" onChange={handleChange} className="p-2 my-4 ring-2 text-xl ring-gray-300 rounded-lg w-full focus:outline-none focus:ring-orange-550" type="text" placeholder="Enter a title"/>
                      <textarea name="content" onChange={handleChange} className="p-2 my-4 ring-2 text-xl ring-gray-300 rounded-lg w-full focus:outline-none focus:ring-orange-550" placeholder="Enter some text"/>
                    </form>
                  </div>
  
                  <div className="mt-4 flex justify-end space-x-4">
                  <button
                      type="Submit"
                      className="inline-flex justify-center px-4 py-2 text-lg font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-orange-550 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={toggleCreate}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-lg font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-orange-550 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={()=>createNote(formData)}
                    >
                      Create
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
