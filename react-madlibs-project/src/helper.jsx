import madlibStories from "../data/madlibStories.json";

/** Returns a Madlib title, text, and blanks to fill in from a local JSON file */
export const getStory = () => {
    const data = Object.entries(madlibStories);

    const index = Math.floor(Math.random() * data.length);

    return {
        title: data[index][0],
        ...data[index][1],
    };
};

export default getStory;