"use client";
import CharacterCard from "@/app/_components/character-card";
import { getCharacter } from "@/lib/api";
import { randomNumber } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

/**
 * As weird as it is, the first 6 ids don't return
 * anything. The other number is the maximum reachable
 * id to date. Can be improved, but that'll do for this
 * exercise
 * */
const MIN_RANGE = 6;
const MAX_RANGE = 7526;

export default function RandomCharacters() {
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

  const { data: randomDataOne } = useQuery({
    queryKey: ["getCharacter", randomIds[0]],
    queryFn: () => getCharacter(`${randomIds[0]}`),
  });

  const { data: randomDataTwo } = useQuery({
    queryKey: ["getCharacter", randomIds[1]],
    queryFn: () => getCharacter(`${randomIds[1]}`),
  });

  return (
    <div className="flex gap-8 mb-4">
      <CharacterCard character={randomDataOne?.data} />
      <CharacterCard character={randomDataTwo?.data} />
    </div>
  );
}
