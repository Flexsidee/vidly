import React from 'react';

const ListGroup = props => {
    const {items, valueProperty, textProperty, onItemSelect, selectedItem } = props;
    return ( 
        <ul className="list-group">
            {items.map(item => (<li className={(item === selectedItem) ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} 
                                    key={item[valueProperty]}
                                    onClick={() => onItemSelect(item)}
                                    >{item[textProperty]}
                                </li>))}
            
        </ul> );
};

ListGroup.defaultProps={  
    textProperty: 'name',
    valueProperty: '_id'
};

export default ListGroup;