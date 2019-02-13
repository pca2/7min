import React from 'react';
import PropTypes from 'prop-types';


const ListItem = props => {
  let className="ListItem";
  if(props.listPosition === props.currentPosition){
    className += " list-item-active"
  }
  
  return(
    <div className={className}>
      <li>{props.item}</li>
     </div>
  );
}

ListItem.propTypes = {
  item: PropTypes.string.isRequired
};


export default ListItem;


