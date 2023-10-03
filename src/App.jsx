import divider from "/images/pattern-divider-desktop.svg";
import iconDice from "/images/icon-dice.svg";
import { useState } from "react";
import { useEffect } from "react";


function App() {

  const [ advice, setAdvice ] = useState({});

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => setAdvice(data.slip));
  }, [])

  const generateAdvice = async () => {
    try {
      const data = (await fetch('https://api.adviceslip.com/advice')).json();
      data.then((fulfilled)=> {
        console.log(fulfilled);
        setAdvice(fulfilled.slip)
      }, (rejected) => {
        console.log(rejected);
      })
      setAdvice(data);
    } catch (error) {
      console.warn(error.message);
    }
  }

  return (
    <div className="max-w-lg h-screen mx-auto bg-[#202632] font-manrope relative">
      <div className="bg-[#303b49] text-center max-w-[355px] lg:max-w-[525px] w-fit m-0 rounded-lg p-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <h3 className="text-lg text-neon-green mb-5">
          {
            `ADVICE #${advice.id}` 
          }
        </h3>
        <h2 className="text-2xl text-light-cyan">
          {
            advice.advice
          }
        </h2>
        <img src={divider} className="w-full my-8" alt="" />
        <div className="absolute left-0 right-0 -bottom-6">
          <button onClick={generateAdvice} className="bg-neon-green hover:brightness-200 hover:shadow-2xl p-4 rounded-full">
            <img src={iconDice} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
