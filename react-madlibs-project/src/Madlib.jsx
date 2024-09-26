import React, { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import getStory from "./helper";
import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";

const Madlib = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [story, setStory] = useState('');
    const [madlibData, setMadlibData] = useState(getStory()); // should be loaded
    // const [userInput, setUserInput] = useState([]);
    const [initialState, setInitialState] = useState(() =>{
        const INITIAL_STATE = {};
        const blanks = madlibData.blanks;
        let idx = 0;
        for(let b of blanks){
            INITIAL_STATE[`${idx}_${b}`]="";
            idx++;
        }

        return INITIAL_STATE;
    });

    // console.log(initialState);

    const loadStory = (formData) => {
        console.log(formData);
        const story = madlibData.text;
        setIsFormSubmitted(true);
        const story_list = [];
        let idx = 0;
        for(let key of Object.keys(formData)){
            // console.log(`${story[idx]} ${formData[key]}`);
            story_list.push(`${story[idx]}${formData[key]}`);
            idx++;
        }

        setStory(s => story_list.join(''));

        return story_list.join('');
    }

    return (
        <div className="Madlib">
            { story === '' ? <h1>Madlibs!</h1> : null}
            { isFormSubmitted ? null : <MadlibForm loadStory={loadStory} INITIAL_STATE={initialState} /> }
            { story !== '' ? <MadlibStory title={madlibData.title} text={ story !== '' ? story : null }/> : null} 
        </div>
    );
};

export default Madlib;
