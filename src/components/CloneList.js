import React from 'react';
import { RiFileCopyLine } from 'react-icons/ri';

const CloneList = ({ listItems, cloneList }) => {
    return (
        <div className='icons'>
             <RiFileCopyLine onClick={() => cloneList(listItems.id)} className='clone-icon' />
        </div>
    )
}

export default CloneList;
