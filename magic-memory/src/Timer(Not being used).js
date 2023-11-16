import { useEffect, useState } from "react";

const Timer = ({shuffleCards}) => {
    const [seconds, setSeconds] = useState(10); // Initial value for the timer in seconds
  
    useEffect(() => {
      // Exit the useEffect if the timer reaches 0
      if (seconds <= 0) {
        shuffleCards();
        // You can add additional logic here when the timer reaches 0
        return;
      }
  
      // Update the timer every second
      const timerInterval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
  
      // Clean up the interval when the component unmounts or when the timer reaches 0
      return () => clearInterval(timerInterval);
    }, [seconds]); // Re-run the effect when the 'seconds' state changes
  
    return (
      <div>
        <h1>Timer: {seconds}s</h1>
      </div>
    );
  };
  
  export default Timer;