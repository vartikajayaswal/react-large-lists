import React from 'react';
import { RiArrowUpSFill } from 'react-icons/ri';
import { RiArrowDownSFill } from 'react-icons/ri';


const MoveList = ({ listItems, moveList }) => {
    const UP = -1
    const DOWN = 1
    return (
        <div className='icons'>
            <div><RiArrowUpSFill onClick={() => moveList(listItems.id, UP)} /></div>
            <div><RiArrowDownSFill onClick={() => moveList(listItems.id, DOWN)} /></div>
        </div>
    )
}

export default MoveList
