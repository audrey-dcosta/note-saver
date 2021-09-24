import React from 'react'

export const Note = ({note}) => {
    return (
        <div className="p-2 my-4 bg-gray-100 rounded-lg w-full">
            <div className="flex justify-between">
            <p className="text-gray-800 font-semibold">{note.note_title}</p>
            <p className="text-gray-400 text-sm font-medium">08:30</p>

            </div>
            <p className="text-gray-800 text-sm pt-2 font-medium">{note.note_id}ggf fg hh hfh h hhh hf h</p>
            <p className="text-gray-400 text-xs pt-2">{note.note_id}</p>
        </div>
    )
}
