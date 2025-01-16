import useAuth from "./useAuth";
import useCounter from "./useCounter"
const CustomHook = ()=>{
    const {count,increment,decrement} = useCounter();
    const isActiveUser =useAuth();
    return <div>
        <h5>Custom Hook Example</h5>
        <h2>Active User :{isActiveUser?"Yes":"No"}</h2>
        <h2>Count: {count}</h2>
        <button onClick={increment}> Increment</button><br/>
        <button onClick={decrement}> Decrement</button>
    </div>
};

export default CustomHook;

/*
=======> Custom hooks in react:-
--> Custom hooks are functions in react which is created with the help of react hooks.
--> Custom hooks starts with 'use' (i.e. useCounter) just like actual hook.
--> A custom hook in React is a JavaScript function that starts with the word "use" and can 
    call other hooks. 
--> It allows you to extract and reuse logic from a component, making your code more modular 
    and easier to maintain. 
--> Custom hooks are a way to share stateful logic between components without the need for 
    render props or higher-order components.

===> Why do we use custom hooks:
==> Reuse Logic: 
    Custom hooks enable the reuse of stateful logic across multiple components. 
    This promotes code reuse and helps to avoid duplicating code.

==> Separation of Concerns: 
    By extracting logic into custom hooks, you can separate concerns within your components. 
    This makes your components more focused on rendering and UI-related tasks.

==> Abstraction: 
    Custom hooks provide a way to abstract complex logic into a simple interface. 
    This abstraction can improve the readability and maintainability of your code.

==> Testing: 
    Logic encapsulated in custom hooks can be easily unit-tested independently of components, 
    promoting a more testable codebase.

*/