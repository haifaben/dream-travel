import { useState, useCallback, useEffect } from "react";

export function useCarouselHook(data, duration = 5000) {
  const datalength = data.length;

  const [selected, setSelected] = useState(0);

  const next = useCallback(() => {
    setSelected((selected + 1) % datalength);
  }, [selected, datalength]);

  const prev = () => setSelected((data.length + selected - 1) % datalength);

  useEffect(() => {
    const timer = setInterval(next, duration);

    return () => clearInterval(timer);
  }, [next, duration]);

  return [selected, next, prev, setSelected];
}
