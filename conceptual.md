### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a front-end framework designed to ease the process of front-end development. If you're creating an app, a website, or something that is going to require modifying your html with JavaScript, then it's recommended to use React to help you with the front-end.

- What is Babel?

Babel is a script translator that is used to convert newer JavaScript syntax to be formatted for older browsers that may not be up to date with newest EC standard.

- What is JSX?

JSX is a file type that stands for *JavaScript and XML*. It allows for injecting html into your JavaScript and is used in React heavily.

- How is a Component created in React?

A component is created by:
> - Creating a new file inside your `src/` folder
> - importing *React*
> - Creating your component
> - export defaulting your component.

```js
import React from "react";

const ComponentName = (props) => {
    <div className="ComponentName">
        <h1>{props.name}</h1> // getting name from props
    </div>
};

export default ComponentName;
```

- What are some difference between state and props? 

Props is a read-only type that can't be changed once the component has rendered. This could be used for information that's static, and can be called from the `props` object. State is a read/write function that is initialized with `[state, setState] = useState(null)` where `state` is the actual value, `setState` is the function used to set the value.

- What does "downward data flow" refer to in React?

Downward data flow describes how data such as props and states can only be transferred down React components and not up the component tree. For instance, I have a `ShoppingList` component and a `Item` component which takes data such as id, name, price, quantity from `ShoppingList`, I can't pass information from `Item` into `ShoppingList`.

- What is a controlled component?

A controlled component is a component that is fully controlled by React. 

- What is an uncontrolled component?

A controlled component is a component that is controlled by the JavaScript DOM.

- What is the purpose of the `key` prop when rendering a list of components?

`Key` is a way for React to tell what components are different from each other.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

Using a array index is poor choice for `key` prop because arrays are mutable and when we push or delete an object from the array, the index can change from where the components actually are.

- Describe useEffect.  What use cases is it used for in React components?

`useEffect` allows us to control when a component is rerendered. For example, if we're creating a timer and we change the state of that timer everytime timer is changed, then we keep calling a `setInterval` function multiple times which can really mess with our actual time.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

`useRef` allows you to reference a value that isn't needed for rerendering. It's used to store information between rerenders. A change to ref does not trigger a rerender.

- When would you use a ref? When wouldn't you use one?

If you need to change a value in the component, but not rerender the component, then useRef is perfect to use.  

- What is a custom hook in React? When would you want to write one?

A custom hook is a hook that you can write yourself in React that takes in state and a function to modify its state. If theres multiple files that switch a value from `true` to `false` then a custom hook to do that for you would be helpful. If your reading/writing `ref` during rendering, will make your component act unpredictably.
