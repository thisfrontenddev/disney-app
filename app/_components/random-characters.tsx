"use client";
import CharacterCard from "@/app/_components/character-card";
import { useRandomCharacterIdSetByInterval } from "@/app/_hooks/use-random-character-id-set-by-interval";
import { getCharacter } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export default function RandomCharacters() {
  const [firstCharacterId, secondCharacterId] =
    useRandomCharacterIdSetByInterval();

  const { data: firstCharacter } = useQuery({
    queryKey: ["getCharacter", firstCharacterId],
    queryFn: () => getCharacter(`${firstCharacterId}`),
  });

  const { data: secondCharacter } = useQuery({
    queryKey: ["getCharacter", secondCharacterId],
    queryFn: () => getCharacter(`${secondCharacterId}`),
  });

  return (
    <div className="flex gap-8 mb-4">
      <CharacterCard
        data-testid="random-one"
        character={firstCharacter?.data}
      />
      <CharacterCard
        data-testid="random-two"
        character={secondCharacter?.data}
      />
    </div>
  );
}
