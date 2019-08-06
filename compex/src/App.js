import React from 'react';
import Ex1 from './Ex1';
import Ex2 from './Ex2';


function App() {

  const arr1 = 
    [
      {pcode:1, pname:'연필', price:300, selected:false},
      {pcode:2, pname:'노트', price:800, selected:false},
      {pcode:3, pname:'샤프', price:2000, selected:false},
      {pcode:4, pname:'축구공', price:13000, selected:false}
  ]
  const arr2 = 
  [
    {pcode:1, pname:'반바지', price:3100, selected:false},
    {pcode:2, pname:'티셔츠', price:8000, selected:false},
    {pcode:3, pname:'양말', price:20000, selected:false},
    {pcode:4, pname:'모자', price:5000, selected:false}
]
  
   

  return (
    <div>
    <Ex2></Ex2>  
    <Ex1 arr={arr1}></Ex1>
    <hr/>
    <Ex1 arr={arr2}></Ex1>
    </div>
  )
}

export default App;
