### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
<!-- The purpose of the React Router is to allow for client side routing. -->
- What is a single page application?
<!-- A single page application is an application thatis built with only one page that renders all components. So with react, it will be an app that has a parent component that renders all the children componenets based on the different links that the user is going to. -->
- What are some differences between client side and server side routing?
<!-- Client side routing does not require a reload of the page when following links. It just re renders the componenets requested by the specified link. Server side routing follows the links and re loads the entire page that the user requests.  -->
- What are two ways of handling redirects with React Router? When would you use each?
<!-- You can either set up a redirect to follow a REDIRECT component (which will redirect the user to where they are supposed to go, but not add any data into the user's history) or you can push a new URL into the users history object (which adds data to the users history and allows for navigation with the forward and back buttons in the browser). -->
- What are two different ways to handle page-not-found user experiences using React Router? 
<!-- To handle 'page not found' errors, you can either redirect the user to the correct page when there is not one that is found, or createding a 'Not Found' componenet that registers when there is no page found that the user is requesting -->
- How do you grab URL parameters from within a component using React Router?
<!-- The useParams hook is used when grabbing URL params from within a component. -->
- What is context in React? When would you use it?
<!-- Context in React is a way to pass data through different levels of components. You can use it when you want to pass data (usually some state or a function) from a parent componenet all the way down to a child component that is multiple levels down.  -->
- Describe some differences between class-based components and function
  components in React.
<!-- Class based componenets in React define a component and rely heavily on the use of "this" keyword in Javascript in order to apply data and functions to the class. Function components in react allow for easily passing down props to other components -->
- What are some of the problems that hooks were designed to solve?
<!-- - Hooks were designed to allow for easy transition of state in React. Hooks also allow for developers to create reusable (more basic) componenets that can be used throughout the application. -->