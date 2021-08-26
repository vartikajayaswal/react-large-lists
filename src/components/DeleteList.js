import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

const DeleteList = ({ listItems, removeList }) => {
    return (
        <div className='icons'>
            <RiCloseCircleLine onClick={() => removeList(listItems.id)} className='delete-icon' />
        </div>
    )
}

export default DeleteList
