import React from "react";

const MadlibStory = ({title, text}) => {
    return (
        <div className="MadlibStory">
            <h1>{title}</h1>
            {text}
        </div>
    );
};

export default MadlibStory;