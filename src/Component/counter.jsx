import React from 'react'
import { useState } from 'react';

export default function Counter() {
    const [result,setResult]=useState('');

    const clickhandler = (event) =>{
        setResult(result.concat(event.target.value));
    }

    const cleardisplay = () =>{
        setResult('');
    }
    const calculate = () =>{
        setResult(eval(result).toString());
        console.log(result);
    }
   
  return (
    <div className='calc'>
        <h3> Calculator</h3>
        <div className='disName'>Designed by Hasantha Karunachandra</div>
        <input type='text' placeholder='0' id='answer' value={result}/>
         
        
        <input type='button' value="7" className='button'onClick={clickhandler}/>
        <input type='button' value="8" className='button'onClick={clickhandler}/>
        <input type='button' value="9" className='button' onClick={clickhandler}/>
        <input type='button' value="+" className='button'onClick={clickhandler}/> 
        <input type='button' value="4" className='button'onClick={clickhandler}/>
        <input type='button' value="5" className='button'onClick={clickhandler}/>
        <input type='button' value="6" className='button'onClick={clickhandler}/>
        <input type='button' value="-" className='button'onClick={clickhandler}/> 
        <input type='button' value="1" className='button'onClick={clickhandler}/>
        <input type='button' value="2" className='button'onClick={clickhandler}/>
        <input type='button' value="3" className='button'onClick={clickhandler}/>
        <input type='button' value="/" className='button'onClick={clickhandler}/>
        <input type='button' value="." className='button'onClick={clickhandler}/>
        <input type='button' value="0" className='button'onClick={clickhandler}/>
        <input type='button' value="*" className='button'onClick={clickhandler}/> 
        <input type='button' value="%" className='button'onClick={clickhandler}/> 
            

        <input type='button' value="Clear" className='button buttonBig' onClick={cleardisplay}/> 
        <input type='button' value="=" className='button buttonBig' onClick={calculate}/>               
    </div>
       
  )
}
