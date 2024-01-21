import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
 const [days, setDays] = useState(0);
 const [hours, setHours] = useState(0);
 const [minutes, setMinutes] = useState(0);
 const [seconds, setSeconds] = useState(0);

 const deadline = "Jan 22, 2024, 08:00:00 EST";

 const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
 }

 useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

 return(
  <div className="rounded-3xl bg-transparent mt-5 flex justify-center">
  <div className="flex flex-wrap">
   <div className="w-1/4 py-2 px-5 flex flex-col text-white text-4xl font-bold md:font-extrabold justify-center">
      <div>
        <p className="text-4xl">{days < 10 ? "0" + days : days}</p>
        <span className="text-lg md:text-2xl">Days</span>
      </div>
    </div>
      <div className="w-1/4 py-2 px-5 flex flex-col  text-white text-4xl font-bold md:font-extrabold">
        <div>
          <p id="hour" className="text-4xl">{hours < 10 ? "0" + hours : hours}</p>
          <span className="text-lg md:text-2xl">Hours</span>
        </div>
      </div>
      <div className="w-1/4 py-2 px-5 flex flex-col  text-white text-4xl font-bold md:font-extrabold justify-center">
        <div>
          <p className="text-4xl">{minutes < 10 ? "0" + minutes : minutes}</p>
          <span className="text-lg md:text-2xl">Minutes</span>
        </div>
      </div>
      <div className="w-1/4 py-2 px-5 flex flex-col  text-white text-4xl font-bold md:font-extrabold">
        <div>
          <p id="second" className="text-4xl">{seconds < 10 ? "0" + seconds : seconds}</p>
          <span className="text-lg md:text-2xl">Seconds</span>
        </div>
      </div>
  </div>
  </div>
 );
}

export default Timer;