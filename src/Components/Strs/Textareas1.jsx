import React from 'react';


const Txtareas1 = function(props)
{



    return ( 
        <div>
            <section className="str1_2 Inc_descrption">
                    <p className="grid_main">{props.title}</p>
            </section>
            <div className="grid_2">
                <section className="str1_2">
                    <textarea id="w3review" name="w3review" rows="6" cols="59" className="txtareas"></textarea>
                </section>
                <section className="str1_2"><textarea id="w3review" name="w3review" rows="6" cols="59" className="txtareas">{props.value}</textarea></section>
            </div>
        </div>
    );
};
export default Txtareas1; 