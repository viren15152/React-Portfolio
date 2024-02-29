import React from 'react'; // Importing React library
import ReactDOM from 'react-dom'; // Importing ReactDOM library
import App from './App'; // Importing the main component of your application

ReactDOM.render( // Rendering the main component to the root element
  <React.StrictMode> {/* Wrapping your component with StrictMode for additional checks */}
    <App /> {/* Rendering your main component */}
  </React.StrictMode>,
  document.getElementById('root') // Mounting point of your React application
);

