function addCommas_old(number) { // only supports integers
    // debugger;

    // get empty array
    const string_arr = [];
    // get number array; number.toString
    const num_arr = Array.from(number.toString());
    // placeholder (comma)
    const placeholder = ",";

    // check for negative
    const negative = num_arr.includes("-") ? num_arr.shift() : ""; // saves negative or nothing if negative isn't found
    
    num_arr.reverse(); // reverses num_arr to add our commas properly

    for(let i = 0; i < num_arr.length; i++){
        if(i%3 === 0 && i !== 0) string_arr.push(placeholder); // makes sure i is a multiple of 3 and that i isn't 0 so that we push a placeholder to the beginning of our array.
        string_arr.push(num_arr[i]);
    }

    // add value we got from 
    string_arr.push(negative);

    return string_arr.reverse().join('');
}

function addCommas(number) { // supports floats
    debugger;
    
    // get empty array
    const string_arr = [];
    // get number array; number.toString
    const num_arr = Array.from(number.toString());
    let float_arr = [];
    // placeholder (comma)
    const placeholder = ",";
    
    /* --- before array reversal --- */
    // check for negative
    const negative = num_arr.includes("-") ? num_arr.shift() : ""; // saves negative or nothing if negative isn't found

    const float_index = num_arr.indexOf(".");
    
    if(float_index > 0){ // float exists
        float_arr = num_arr.splice(float_index);
    }
    

    /* --- after array reversal --- */
    num_arr.reverse(); // reverses num_arr to add our commas properly

    for(let i = 0; i < num_arr.length; i++){
        if(i%3 === 0 && i !== 0) string_arr.push(placeholder); // makes sure i is a multiple of 3 and that i isn't 0 so that we push a placeholder to the beginning of our array.
        string_arr.push(num_arr[i]);
    }

    // add value we got from 
    string_arr.push(negative);

    return string_arr.reverse().concat(float_arr).join('');
}

const add_comma_one_line = (number) => number.toLocaleString(); // also found this lol.

module.exports = addCommas;
