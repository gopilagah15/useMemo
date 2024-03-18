import './App.css';
import Header from './Header';
import { useMemo, useState } from 'react';


function App() {
  const [count, setcount] = useState(0);
  const [name, setname] = useState('');

  const expensiveCalculation =(num) =>{
    console.log('calculating')
    for (let i = 0; i < 1000054400; i++){}
      return num;
    }
  
    const cal = useMemo(()=>
      expensiveCalculation(count)
    ,[]);
  return (
    <>
    <div className="container" style={{position : 'relative', height:'100vh', width:'100%'}}>
      <div className=""style={{position:' absolute',top:'50%', left:'50%' ,transform:'translate(-50%,-50%', }}>
      <Header/>
    <button onClick={()=> setcount(count+1)}>Increment</button>
    <h1>Count: {count}</h1>
    <input type="text" onChange={(e)=> setname(e.target.value)} />
      </div>
    </div>



    
    </>
  );
}

export default App;




//expensive function will slow down the performance

// import './App.css';
// import Header from './Header';
// import { useState } from 'react';


// function App() {
//   const [count, setcount] = useState(0);
//   const [name, setname] = useState('');

//   const expensiveCalculation =(num) =>{
//     for (let i = 0; i < 10000000; i++){}
//       return num;
//     }
  
//     const cal = expensiveCalculation(count);
//   return (
//     <>
//     <div className="container" style={{position : 'relative', height:'100vh', width:'100%'}}>
//       <div className=""style={{position:' absolute',top:'50%', left:'50%' ,transform:'translate(-50%,-50%', }}>
//       <Header/>
//     <button onClick={()=> setcount(count+1)}>Increment</button>
//     <h1>Count: {count}</h1>
//     <input type="text" onChange={(e)=> setname(e.target.value)} />
//       </div>
//     </div>



    
//     </>
//   );
// }

// export default App;
