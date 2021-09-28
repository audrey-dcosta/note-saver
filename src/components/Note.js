import React from 'react'
import {HiTrash,HiPencil} from 'react-icons/hi'
import {timeSince} from '../helpers/functions'

export const Note = ({note}) => {
    var time_since = timeSince(note.note_createdAt)

    return (
        <div className="p-4 my-4 bg-gray-100 rounded-lg w-full">
            <div className="flex justify-between">
            <p className="text-gray-800 font-semibold">{note.note_title}</p>
            <div className="text-gray-800 text-2xl flex space-x-2 ">
            <HiTrash className="hover:text-orange-550"/>
            <HiPencil className="hover:text-orange-550"/>
            </div>

            </div>
            <p className="text-gray-800 text-sm pt-2 font-medium">{note.note_id}ggf fg hh hfh h hhh hf h</p>
            <p className="text-gray-400 text-xs pt-2">{time_since}</p>
        </div>
    )
}
