import React from "react";

const MadlibInput = ({ handleChange, id, text, value}) => {
    const start = text.indexOf('_')+1; // makes sure to chop off the id at the front so that 01_adjective -> adjective. For user readability.
    return (
        <>
            <li>
                {/* text.slice(2) cuts off id and gets just the blank name (ie. 1_adjective -> adjective*/}
                <input onChange={handleChange} id={id} type="text" name={id} placeholder={text.slice(start)} value={value} required/>
                {/* <label htmlFor={id} className="MadlibInput">{text.slice(start)}</label> */}
            </li>
        </>
    );
};

export default MadlibInput;
