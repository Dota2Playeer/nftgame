import React from 'react';


const Txtareas1 = function(props)
{



    return (        
    <div className="grid_2">
        <section className="str1_2">
            <p className="grid_main">{props.title}</p>
            <textarea id="w3review" name="w3review" rows="6" cols="59" className="txtareas"></textarea>
        </section>
        <section className="str1_2 grid_main"><input className="inputs_2_1">{props.value}</input></section>
    </div>
    );
};
export default Txtareas1; 