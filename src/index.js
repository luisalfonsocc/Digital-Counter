import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0;
let unitCounter = 0;
let tenCounter = 0;
let hundredCounter = 0;
let unitThousandCounter=0;
let tenThousandCounter=0;

setInterval(()=>{
counter ++
unitCounter = Math.floor(counter / 1) % 10;
tenCounter = Math.floor(counter / 10) % 10;
hundredCounter = Math.floor(counter / 100) % 10;
unitThousandCounter = Math.floor(counter / 1000) % 10;
tenThousandCounter = Math.floor(counter / 10000) % 10;
  root.render(
    <React.StrictMode>
      <App unit={unitCounter} ten={tenCounter} hundred={hundredCounter} unitThousand={unitThousandCounter} tenThousand={tenThousandCounter} />
    </React.StrictMode>
  );

  console.log(` contador ${counter}`);
  console.log(` unidad  ${unitCounter}`);
  console.log(` decena  ${tenCounter}`);
  console.log(` centena${hundredCounter}`);
  console.log(` unidad de mil ${unitThousandCounter}`);
  console.log(` decena de mil${tenThousandCounter}`);

},1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
