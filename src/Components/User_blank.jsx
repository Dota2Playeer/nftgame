import React from 'react';
import refs from "./Index"
const UserBlank = function() {
    let UserData = [
        ["Player", {
            "Name": "Test",
        }],
        ["Player2", {
            "Name": "vasya",
        }],
    ]
    function User_blank() {
        console.log(refs[0].current.value);
    }
    return (
        UserData
    );
};

UserBlank(); 
export default UserBlank;