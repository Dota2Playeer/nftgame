import React from 'react';
import Testing from "./Strs/Str1el"
import Txtareas1 from './Strs/Textareas1';
import Triple from './Strs/Triple';

const Container = function(props)
{



    return (        
    <div className="Container">
        <div className="Element">{props.title1}</div>
            <div className="Container_content grd_test">
                <div className="Inc_descrption">
                    {props.content}
                </div>
            </div>
    </div>
    );
};
export default Container; 