import React from 'react';
import ListItem from './ListItem';


const ListDisplay = props => {
  return(
    <div className="ListDisplay">
      <ul>
        {props.list.map((item,index) => <ListItem key={index} listPosition={index} item={item} currentPosition={props.currentPosition} />)}
       </ul>
     </div>
  )
}

export default ListDisplay;
