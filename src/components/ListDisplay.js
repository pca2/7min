import React from 'react';
import ListItem from './ListItem';


const ListDisplay = props => {
  return(
    <div className="ListDisplay">
      <ul>
        {props.List}.map(item => <ListItem item={item}/>)
       </ul>
     </div>
  )
}