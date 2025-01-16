// ####### Always Code slow (to learn things in deep) (Don't hurry).
/*
    -> package.json is configuration file for npm.
    -> react is a javascript library which is created by facebook developers
    -> we can create our own create-react-app using webpack and all.
*/
/*
==> Bundler : -
    -> Bundler is used to Bundle your applications which will deploy to production
    -> create-react app uses webpack bundler to deploy code into production
    -> '^2.7.8' => 'major.minor.'
    -> package-lock.json is used to store exact version of the packages (dependencies)
    -> Parcel uses babel
*/
/*
==> Transitive dependencies : 
    ->  When dependencies of module 1 is depends on other and other module have dependencies of other 
        modules and so on.. is known as transitive dependencies.
    ->  dependencies tree 
*/

/*
==> Parcel : -
    ->  Parcel is a zero configuration build tool for the web. 
        It combines a great out-of-the-box development experience with a scalable 
        architecture that can take your project from just getting started to 
        massive production application.
    
    => Things done by parcel
        -> HMR : hot module replacement (automatically run file when you save file)
        -> Dev Build
        -> Provide local server
        -> Parcel uses file watching algorithm (for HMR):- written in c++
        -> Gives you faster build because of caching (.parcel-cache kind of binary file)
        -> Parcel does image optimization
        -> Minification of files (Project files)
        -> Bundling
        -> Compressing of files
        -> Parcel is manager (Parcel use all libraries to make react fast)
        -> Consistent hashing?
        -> Code splitting
        -> Differentials bundling (to support older browser (diff. bundle for diff browser))
        -> Error handling
        -> Diagnostic
        -> Host app on Https 
        -> Tree Shaking (remove unused code for you)
        -> Create different dev and prod bundle
        -> npx parcel build index.html (building production build)
        -> Gives you only three files .js,.html and .css
        -> .parcel-cache and dist can be automatically generated
        -> not only react is making your app faster, webpack are making your app fast.
        -> Builder build all files and generated one file but if you have big app then it would not considered 
            as optimized application unless you bundle them in smaller files and this process is 
            known as code splitting/chunking/lazy loading/dynamic bundling/dynamic import.
            This is also known as logical code splitting/ bundling.

==> Build Application using Parcel:
    -> npx parcel source_file
    -> it creates dist file
    -> .parcel-cache
    -> npx means execute any package
    -> there are two kinds of dependencies in package.json 
        1) devDependencies (used only for develop and testing purpose not for production)
        2) dependencies (normal dependencies)
    "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start":"parcel index.html",// for dev 
            "build":"parcel build index.html" // for prod
        }
    -> npm start === npm run start
    -> never run "npm build" instead run "npm run build" 
==> Babel:
    -> Babel is open source javascript compiler.
    -> Babel transpile the newer javascript code to older JS code so that older browser can understand that.
    -> Learn more about babel
*/


/*

==> React Element:-
    -> ReactElement ==> Javascript Object ==> Html Element (when it is rendered)
    -> ReactElement is javascript Object
    -> JSX ==> ReactElement ==> Javascript Object ==> Html Element (when it is rendered)

===> React vs ReactDOM :-
    -> React is used to create elements 
    -> ReactDOM is used to display React elements into browser
    -> JSX is way of writing javascript element
    -> JSX is not HTML inside javascript
    -> JSX is like HTML syntax  
    -> const heading = React.createElement('h1',{id:"heading"},"Hello World");
    -> Element using react
    -> const jsxHeading = <h1>Hello World</h1> (Element using jsx)
    -> above two lines are equivalent
    -> jsx is not pure javascript because browser and machine cannot understand this.
    -> jsx before going to browser, (babel) webpack transpile the code so that browser can understand. 

==> JSX :-
    -> const h1 = <h1>Hello World</h1> // Valid jsx
    -> const h1 = <h1>
                    Hello World 
                  </h1> // Invalid JSX
    -> const h1 = (<h1>
                    Hello World 
                  </h1>) // Valid JSX
    -> JSX is take care of injections attacks
    -> JSX also sanitized the data and prevent cross site scripting
*/
/*
    ==> Components : -
        -> Everything in react is a component.
        -> e.g. button , card ...etc
            1) Class based Components (old way of writing code )
            2) Functional Components (New way of writing code)
        -> Functional component is normal js function which return some jsx
        ->  const HeadingComponent = ()=>{
                return (<h1>Functional Components</h1>)
            } // this is a react component
        -> const HeadingComponent = () => <h1>Functional Components</h1>
        -> this is how we render Components
            <HeadingComponent />;
                {HeadingComponent()};
            <HeadingComponent></HeadingComponent>;
        -> components composition is components inside another components and so on.
        -> Always write components in Capital latter.

    ==> Props :-
        -> Short form of properties
        -> props are just arguments to a function
        -> const fun = ({name,age,email}) => { 
                // parameter destructuring is know as destructuring on fly.
            }

    ==> Config driven UI :-
        ->  on some website when we change UI depends on the locations or something
            else is know as config driven UI. UI will changed based on requirements
        ->  config comes from backend .
        ->  We have control on UI.
        ->  React say that never uses index as key. never never never.

==> Separation of Concerns (SoC) :-
    ->  Separation of Concerns (SoC) is a fundamental design principle in software engineering that 
        advocates breaking a program into distinct features or modules, each responsible for a 
        specific concern. 
        In the context of microservices architecture, SoC is crucial for building scalable, maintainable, 
        and flexible systems. 
        Here's how the concept of SoC applies to microservices:

==> Shimmer UI:-
    -> Loading card with empty data(for better user experience)
    -> Loading fake page/card till the data is load

==> React Hooks:-
    -> Hooks are normal util javascript functions which do some special works
    -> these are most useful react hooks.
    -> useState() :- used to update UI based on state of the variable.
        -> whenever a state variable is updates react re-rendered the component.
        -> React only good at DOM manipulation.
    -> useEffect()  :-
        -> special javascript function react.
        -> useEffect(callback_function,[dependencies array]);
        -> Use effect is called after the component is rendered.
        -> first the body of that component will run then useEffect will run.
*/
/*
    ==> Routing in react :-
        ->  client side routing : when all the pages already loaded and moving from one page to another 
            won't reload the page.
        ->  server side routing : when the pages are not loaded at once. whenever we move from one page to 
            another page will be loaded and that page coming from the server.(i.e. index.html, about.html ..etc)
*/

/*
==> Notes:
    -> there is two way to export module.
        -> default export (export default anything) to import anything
        -> named export (export const data=[1,2]) to import use {data}
    ->  React is fast in DOM manipulation and this is the exact issue react is solving. 
        This is why we use react and all other frameworks are trying to solving this issue.
    ->  Actual DOM :- <h1>Actual dom</h1>, <img> ...etc
    ->  Virtual DOM :- Representation of actual DOM.
        -> Virtual DOM is react-element and it will print javascript object.
    ->  Diff algorithm find out the diff between virtual DOMs (Old and new Virtual DOM) 
        and then it will render the objects. this whole process is known as reconciliation or react fiber.
    ->  Finding out difference between two html element is slow but between javascript object is fast.
        this is where the react become fast.
    ->  React keeps track of all node (react elements)
    -> Whenever a local state (state variable) variable is changed, that particular component re-rendered.
    -> react do efficient dom manipulation, efficient rendering of components.
    -> All react app a is single page application (SPA) because only component get interchanged 
       not entire application's page.
    -> 'rendering', 'loading' and 'mounting' has same meaning.
    -> // Conditional rendering
        if(!listOfRestaurant.length){
            return <Shimmer />
        }
    ->  Learn about react-dev-tool (and why we should use it)
    ->  Every frontend has two layers
            1) UI layers
            2) Data layer
    ->  Learn microservices and monolithic architecture in deep
    ->  Never use hooks Conditionally, in loop, or in function.
    ->  hooks are only used inside components.
    ->  Every time Header component is rendered, this use effect is called.But because of the dependencies 
        array the useEffect will executed.
    ->  Dependencies arrays are not mandatory in useEffect.If there is no dependencies array in useEffect
        every time component is rendered the useEffect getting called.
    ->  if dependencies array is empty then useEffect only called on initial render only one time.
    ->  if we provide some values in dependencies array then useEffect only called when dependencies changes.


*/

/*
==> CORS issue:-
    -> Generally our browser block us to fetch different origin's API access to local host.
    -> we can by-pass this by installing cors extension.
*/

/*
==> HOC: (Higher order component):-
    ->  HOC is a function that takes a component and return a enhanced component.
    ->  HOCs allow you to reuse component logic, share code, and compose components in a more modular 
        and reusable way.

==> Why do we use HOC:-
    -> Code Reusability:    
        HOCs enable you to encapsulate and reuse component logic. Instead of duplicating the same logic 
        across multiple components, you can create an HOC and apply it to different components.

    -> Cross-Cutting Concerns:
        HOCs are often used for cross-cutting concerns, such as authentication, logging, or tracking. 
        These concerns can be applied to multiple components without cluttering the individual components 
        with the related logic.

    -> Abstraction of State or Behavior:
        HOCs allow you to abstract away certain aspects of state management or behavior, making your 
        components more focused and easier to understand.
*/

/*
==> Lifting state up:
    ->  Sharing state between components.
    ->  Sometimes, you want the state of more than one components to change together. 
        To do it, remove state from all of them, move it to their closest common parent, and then pass it 
        down to them via props. This is known as lifting state up, and it’s one of the most common things 
        you will do while writing React code.

==> Props Drilling :-
    -> Passing data from one to other components is very complex when the application is very huge.
    -> react has 1 way data flow. (parent to children) (Top to bottom)
    -> Example:
        // Parent Component
        const dummy = "Dummy"
        <Parent>
            <Child dummy={dummy}></Child>
        </Parent>

        // Child component
        const Child = ({dummy})=>{
            return <GrandChild dummy={dummy}></ GrandChild>
        }

    -> here dummy need to used by GrandChild component but dummy is in Parent component.hence we are drilling 
       dummy from parent to grandchild including child component. this is known as props drilling.
    -> This props drilling is a problem in react.
    -> we use react context or any state management library to overcome this props drilling issue.
*/

/*
===>Life Cycle methods in react:-
-> Lifecycle methods in React are used to perform specific tasks or actions at various points.

   1)Initialization and Setup:
        -> constructor: Used for initializing the component's state and binding event handlers.
        -> componentDidMount: Invoked after the component has been inserted into the DOM. 
           It's commonly used for performing initial data fetching or setting up subscriptions.

    2) Updating State and Props:-
        -> shouldComponentUpdate: Allows you to control whether the component should re-render after a 
           state or prop change. Optimizing this method can prevent unnecessary renders.
        -> componentDidUpdate: Invoked after the component updates. Useful for performing side effects 
           after a state or prop change.

    3) Cleanup and Resource Management:
        -> componentWillUnmount: Called just before the component is removed from the DOM. 
           Used for cleanup tasks like cancelling network requests, clearing intervals, or unsubscribing 
           from data streams.

    4) Error Handling:
        -> componentDidCatch: Introduced in React 16, this method is used to catch JavaScript errors 
           anywhere in the component tree. It allows you to log errors or display a fallback UI.

    5) Optimizing Performance:
    
-> While lifecycle methods are powerful, it's essential to note that with the introduction of Hooks in 
   React 16.8, functional components have become a common way to write components, and the need for 
   class-based lifecycle methods has diminished. 
   The useEffect Hook, in particular, covers most scenarios where lifecycle methods were traditionally 
   used.
-> In functional components, useEffect allows you to manage side effects and perform cleanup tasks, 
   similar to componentDidMount, componentDidUpdate, and componentWillUnmount in class components. 
   The choice between class components and functional components with Hooks often depends on the project's
   requirements, team preferences, and the specific use case.

-> In functional components in React, you can use the useEffect Hook to achieve similar effects as the 
   lifecycle methods in class components. useEffect allows you to perform side effects in your functional 
   components, such as fetching data, subscribing to external events, or manually managing subscriptions.

## Here's a brief comparison between lifecycle methods in class components and the equivalent 
   functionality using useEffect in functional components:
   ==> Classed Based Components:
        class App extends React.Component{
            componentDidMount(){
                // This function is called after first render of the component in the DOM.
            }

            componentDidUpdate(prepProps,PrevState){
                // This life cycle method is called after each render of the component.
            }

            render(){
                return <div>This is App component</div>
            }
        }

    ==> Function Component (Modern React)
        function App(){
            useEffect(()=>{
                // This is called after first render of component in DOM.
                // call of useEffect with empty dependencies is equivalent to componentDidMount in class based comp.
                
                //this is equivalent to life cycle method componentWillUnmount
                return ()=>{
                    console.log("Return a clean up function if needed);
                }
            },[]);

            useEffect(()=>{
                console.log("This useEffect hook is run after each render of the component.");
            })

            useEffect(()=>{
                console.log("This useEffect hook is called whenever someProps or someVar value changes");
            },[someProps,someVar]) 
            // You can write clean up function in reach useEffect.
            return <div>This is app component</div>
        }
-> Keep in mind that useEffect can cover scenarios equivalent to componentWillUnmount as well, by returning 
   a cleanup function inside the useEffect. 
   Additionally, it can be used to handle scenarios like componentDidCatch by catching errors inside the 
   component and logging or handling them.
-> In functional Components useEffect hook replaced life cycle methods. 
-> Hooks are introduced in react 16.8 version
-> Hooks are nothing but special javascript function with some super power to do some very special kind of 
   works.
*/
