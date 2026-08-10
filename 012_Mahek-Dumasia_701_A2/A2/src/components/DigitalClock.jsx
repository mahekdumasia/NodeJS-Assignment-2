import { useState, useEffect } from 'react';

export default function DigitalClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Set timer to update clock every second
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card p-4 text-center bg-dark text-white shadow-sm">
      <h2>Digital Clock</h2>
      <h1 className="display-2 my-3 text-warning">{time}</h1>
    </div>
  );
}