import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import MadlibInput from "./MadlibInput";
import "./MadlibForm.css"

const MadlibForm = ({ loadStory, INITIAL_STATE }) => {
    const [formData, setFormData] = useState(INITIAL_STATE);

    // submit formData, loads story, resets forms data to initial state
    const handleSubmit = evt => {
        evt.preventDefault();
        loadStory(formData);
        setFormData(INITIAL_STATE);
    }

    // changes formData on change
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => {
            return {
                ...fData,
                [name]: value
            }
        });
        console.log(`${name} was modified with key ${value}`);
    }

    return (
        <div className="MadlibForm">
            <form className="MadlibForm-form" onSubmit={handleSubmit}>
                {Object.keys(formData).map(key => <MadlibInput handleChange={handleChange} id={key} text={key} value={formData[key]}/>)}
                <button>Read your Madlib!</button>
            </form>
        </div>
    );
};

export default MadlibForm;