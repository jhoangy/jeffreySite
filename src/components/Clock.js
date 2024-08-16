import React, { useState, useEffect } from 'react';

const Clock = ({ timeZone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
     {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZone })}
    </div>
  );
};

export default Clock;
