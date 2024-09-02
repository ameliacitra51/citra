import React, { useState } from 'react'

const Kalkulator = () => {
    const [value, setValue] = useState('');
    const handleClick = (value) => {
        const buttonValue = value.target.value;
        setValue ((prevValue) => {
            if(buttonValue === 'clear'){
                return '';
            }else if(buttonValue === 'del'){
                return prevValue.slice(0, -1);
            }else if(buttonValue === 'action'){
                try {
                    return eval(prevValue).toString();
                } catch  {
                    return 'error';
                }
            }else{
                return prevValue + buttonValue;
            }
        })
    }
  return (
   <section>
    <div className='bg-blue-100 flex justify-center items-center pt-5 h-screen'>
    <div className="bg-[#c1d3fe] w-72 h-[500px] rounded-2xl shadow-[inset_5px_5px_12px_#fff,5px_5px_12px_rgba(0,0,0,0.16)] flex flex-col p-5 justify-center items-center">
        <form className="h-1/3 w-full rounded-2xl shadow-[inset_5px_5px_12px_#fff,2px_3px_11px_rgba(0,0,0,0.16)] flex justify-center">
        <input id='screen' type= 'text' value={value} placeholder='0' className='bg-blue-200 border-none text-right text-4xl w-full rounded-2xl outline-none'/>
        </form>
        <div className='h-2/3 w-full flex justify-center text-center rounded-2xl pt-5'>
        <div className="cursor-pointer grid grid-cols-4 gap-2">
        <button value="clear" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-red-300'>AC</button>
        <button value="del" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-red-300'>DEL</button>
        <button value="%" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-red-300'>%</button>
        <button value="/" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-red-300'>/</button>
        <button value="9" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-yellow-300'>9</button>
        <button value="8" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-yellow-300'>8</button>
        <button value="7" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-yellow-300'>7</button>
        <button value="*" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-red-300'>X</button>
        <button value="6" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-yellow-300'>6</button>
        <button value="5" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-yellow-300'>5</button>
        <button value="4" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-yellow-300'>4</button>
        <button value="-" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-red-300'>-</button>
        <button value="3" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-yellow-300'>3</button>
        <button value="2" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-yellow-300'>2</button>
        <button value="1" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-yellow-300'>1</button>
        <button value="+" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-red-300'>+</button>
        <button value="0" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-yellow-300'>0</button>
        <button value="00" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-yellow-300'>00</button>
        <button value="." onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-yellow-300'>.</button>
        <button value="action" onClick={handleClick} className='bg-[#00bfff] rounded-full h-12 w-12 hover:scale-105 hover:bg-red-300'>=</button>
        </div>
        </div>
    </div>
    </div>
   </section>
  )
}

export default Kalkulator
