import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import Navbar from './components/Navbar.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // JSX fragment
  <>
  {/* to call it as a function  */}
  {Navbar()}  

   <Navbar />
   <Navbar />
   <Navbar />
   <h1>counter: {counter}</h1>
   <button onClick={addOne}>Add</button>
   <button>Delete</button>
   <App />
  </>
);
