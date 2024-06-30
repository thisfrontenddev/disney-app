import { randomNumber } from "@/lib/utils";
import { useEffect, useState } from "react";

/**
 * As weird as it is, the first 6 ids don't return
 * anything. The other number is the maximum reachable
 * id to date. Can be improved, but that'll do for this
 * exercise
 * */
const MIN_RANGE = 6;
const MAX_RANGE = 7526;
const DEFAULT_INTERVAL = 10_000;

export function useRandomCharacterIdSetByInterval(
  interval: number = DEFAULT_INTERVAL
) {
  const [randomIds, setRandomIds] = useState([
    randomNumber(MIN_RANGE, MAX_RANGE),
    randomNumber(MIN_RANGE, MAX_RANGE),
  ]);

  useEffect(() => {
    let interval = setInterval(() => {
      setRandomIds([
        randomNumber(MIN_RANGE, MAX_RANGE),
        randomNumber(MIN_RANGE, MAX_RANGE),
      ]);
    }, 10_000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return randomIds;
}
