import React, {useState,useEffect} from 'react';
import { RiCloseCircleLine, RiFileCopyLine, RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';

function ListFetching () {
    const [listItems, setListItems] = useState([]);

    useEffect( () => {
        
        const fetchList = async () => {
        const response = await fetch('http://jivoxdevuploads.s3.amazonaws.com/eam-dev/files/44939/Rule%20JSON.json');
        const result = await response.json();
        setListItems(result.data);
        }
        fetchList();
    },[]);

    const cloneList = (index, listItem) => {
        const clonedArr = [...listItems];
        clonedArr.splice(index + 1, 0, listItem)

        setListItems(clonedArr)
    };

    const removeList = (index) => {
        const removedArr = [...listItems];
        removedArr.splice(index, 1)

        setListItems(removedArr)
    };


    const moveList = (index, listItem, direction) => {
        
        if (((direction === -1) && (index === 0)) || ((direction === 1) && (index === listItems.length - 1))) {
          return 
        }

        const movedArr = [...listItems];
        movedArr.splice(index, 1);
        movedArr.splice(index + direction, 0, listItem)
    
        setListItems(movedArr);
    };

    return (
        <div>
            <ul className='list-group w-50 m-5 mx-auto'>
            {
                listItems.map((listItem,index) => (
                    <li className='list-group-item d-flex justify-content-between' value={index} key={index}>
                        <div className='align-self-center'>
                            <div>ID : {listItem.id}</div>
                            <div>RuleName : {listItem.ruleName}</div>
                        </div>
                        <div className='align-self-center'>                        
                            <div><RiFileCopyLine onClick={() => cloneList(index, listItem)} /></div>
                            <div><RiCloseCircleLine onClick={() => removeList(index)} /></div>
                            <div><RiArrowUpSFill onClick={() => moveList(index, listItem, -1)} /></div>
                            <div><RiArrowDownSFill onClick={() => moveList(index, listItem, +1)} /></div>
                        </div>
                    </li>
                   
            ))}
             
            </ul>
        </div>
    )
}

export default ListFetching;