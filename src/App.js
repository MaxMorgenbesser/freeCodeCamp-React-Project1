// import logo from './logo.svg';
 import './App.css';
import React from 'react';
import ReactDOM  from 'react-dom/client';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function App(){
  return ( <div>
    <img width = "40px" src="./react-logo.png" />
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li> 
      <li>Is Maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
      
    </ul>
    </div>
    ) 
  
}

export default App;
