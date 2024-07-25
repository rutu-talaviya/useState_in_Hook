import react, { useState } from 'react';

const App=()=>{

    const state=useState();
    const[Num,newNum]=useState(0);

const btn=()=>{
    newNum(Num+1);
};

return(
    <>
        <h1>{Num}</h1>
        <button onClick={btn}>CLICK ME</button>
    </>)

};
export default App;