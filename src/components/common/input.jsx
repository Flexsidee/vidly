import React from 'react';

const Input = ({name, label, value, onChange}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                value={value} 
                onChange={onChange}
                name={name}
                id={name} 
                className="form-control" 
                type="text" 
                />
        </div>        
     );
}
 
export default Input;