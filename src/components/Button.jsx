import React from 'react';

export default function Button({ label }){
    return(
        <button 
            className="btn-default" 
        >
            {label}
        </button>
    )
}