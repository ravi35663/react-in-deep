/*
    Virtual DOM:
    -> Virtual DOM is in-memory representation of actual dom in react.
    -> Virtual DOM allow react to update UI efficiently by difference (diffing)
       between the current and previous states and then updating only necessary part of
       actual dom.
    -> React creates a virtual dom tree from components
    -> When state changes, React updates the virtual DOM.
    -> React calculates the difference (diffing) and updates only the changed parts in 
       the real DOM.
*/

/*
    Shallow DOM:
    -> "Shallow DOM" isn't a standard term in React. However shallow dom rendering is 
       a concept used in testing.
    -> It render a components without rendering its children, providing a way to test 
       components in isolation.
    
    -> Using shallow from Enzyme (a testing utility) to render a component without 
       its children.
*/

import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

const wrapper = shallow(<MyComponent />);

/*
    Real DOM:
    -> Real dom is an actual representation of element in the browser.
    -> Manipulating the real DOM is slower because every change causes the browser 
       to re-render part or all of the page.
    -> Directly manipulating DOM elements with vanilla JavaScript or jQuery.
        document.getElementById('name').textContent = "Ravi"
*/

/*
    Virtual DOM: Efficient, in-memory representation used by React to optimize updates.
    Shallow DOM: A testing concept for rendering components in isolation.
    Real DOM: The actual DOM elements in the browser, slower to update compared to the virtual DOM.
*/