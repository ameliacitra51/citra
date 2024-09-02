import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'clear') {
      setInput('');
      setResult('');
    } else if (value === 'del') {
      setInput(input.slice(0, -1));
    } else if (value === 'action') {
      try {
        setResult(eval(input) || '');
      } catch {
        setResult('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <main className="bg-aquamarine flex justify-center items-center pt-5 min-h-screen">
      <div className="bg-red-300 w-72 h-[500px] rounded-2xl shadow-[inset_5px_5px_12px_#fff,5px_5px_12px_rgba(0,0,0,0.16)] flex flex-col p-5 justify-center items-center">
        <form className="bg-pink-100 h-1/3 w-full rounded-2xl shadow-[inset_5px_5px_12px_#fff,2px_3px_11px_rgba(0,0,0,0.16)] flex justify-center">
          <input
            id="screen"
            placeholder="0"
            className="bg-pink-300 border-none text-right text-4xl w-full rounded-2xl outline-none"
            value={input}
            readOnly
          />
        </form>

        <section className="h-2/3 w-full flex justify-center text-center rounded-2xl pt-5">
          <div className="w-2/3 grid grid-cols-3 gap-2">
            {['AC', 'del', '%', '9', '8', '7', '6', '5', '4', '3', '2', '1','.', '0', '.'].map((btn) => (
              <button
                key={btn}
                onClick={() => handleClick(btn)}
                className="bg-pink-200 border-none w-12 h-12 rounded-full cursor-pointer text-pink-400 hover:scale-90"
              >
                {btn}
              </button>
            ))}
          </div>

          <div className="w-1/3 bg-pink-300 flex flex-col items-center justify-around rounded-2xl shadow-[0_0_10px_#f1e7e7]">
            {['/', '*', '-', '+', 'action'].map((btn) => (
              <button
                key={btn}
                onClick={() => handleClick(btn)}
                className="bg-pink-200 border-none w-12 h-12 rounded-full cursor-pointer text-pink-400 hover:scale-90"
              >
                {btn === 'action' ? '=' : btn}
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Calculator;