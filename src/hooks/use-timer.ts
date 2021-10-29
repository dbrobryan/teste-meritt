import { useCallback, useEffect, useRef, useState } from "react";

let interval: any;

export function useTimer(time: number) {
  const callbackRef = useRef<any>(null);
  const [timer, setTimer] = useState<string>("");
  const [internTime] = useState<number>(
    new Date().getTime() + time * 60 * 1000
  );

  const handleSubTime = useCallback(() => {
    const date = new Date();
    const numericHours = new Date(internTime + Date.now()).getHours() - date.getHours();
    const numericMinutes = new Date(internTime  + Date.now()).getMinutes() - date.getMinutes();
    const numericSeconds = new Date(internTime  + Date.now()).getSeconds() - date.getSeconds();
    const hours = String(Math.abs(numericHours)).padStart(2, "0");
    const minutes = String(Math.abs(numericMinutes)).padStart(2, "0");
    const seconds = String(Math.abs(numericSeconds)).padStart(2, "0");

    setTimer(`${hours}:${minutes}:${seconds}`);

    if (internTime <= new Date().getTime()) {
      window.clearInterval(interval);
    }
  }, [internTime]);

  const handleSetTime = useCallback(() => {
    callbackRef.current();
  }, []);

  useEffect(() => {
    callbackRef.current = handleSubTime;
  }, [handleSubTime]);

  return {
    timer,
    start: () => {
      interval = window.setInterval(handleSetTime, 1000);
    },
    stop: () => window.clearInterval(interval),
  };
}
