import React from 'react';


const Triple = function(props)
{



    return (        
    <div className="triple">
       
        <section className="str1_2">{props.title1}<textarea id="w3review" name="w3review" rows="6" cols="59" className="txtareas_1"></textarea></section>
        <section className="str1_2">{props.title2}<textarea id="w3review" name="w3review" rows="6" cols="59" className="txtareas_1"></textarea></section>
        <section className="str1_2">{props.title3}<textarea id="w3review" name="w3review" rows="6" cols="59" className="txtareas_1"></textarea></section>
                           
    </div>
    );
};
export default Triple; 