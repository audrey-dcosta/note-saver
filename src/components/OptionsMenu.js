import { Menu, Transition } from '@headlessui/react'
import React,{ Fragment, useEffect, useRef, useState } from 'react'
import {HiOutlineDotsVertical,HiPencil,HiTrash } from 'react-icons/hi'

export const OptionsMenu = ({delete_notebook,id}) => {
    return (
        <div className="text-right ">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-2 py-2 text-2xl font-medium text-gray-900 bg-opacity-20 hover:text-orange-550">
              <HiOutlineDotsVertical/>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-orange-550 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                    <HiPencil className="mr-2 w-5 h-5"/>
                      Edit
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                    onClick={delete_notebook(id)}
                      className={`${
                        active ? 'bg-orange-550 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                    <HiTrash className="mr-2 w-5 h-5"/>
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    )
  }
  
  
  
  
