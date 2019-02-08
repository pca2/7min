import React from 'react';
import PropTypes from 'prop-types';


const ListItem = props => (
  <div className="ListItem">
    <li>{props.item}</li>
   </div>
);

ListItem.propTypes = {
  item: PropTypes.string.isRequired
};


export default ListItem;


