import React from 'react';


const Testing = function(props)
{

    return (        
    <div className="grid_2">
        <section className="str1 grid_main"><p className="grid_main">{props.title}</p></section>
        <section className="str1 grid_main"><p className="inputs">{props.value}</p></section>
    </div>
    );
};
export default Testing; 