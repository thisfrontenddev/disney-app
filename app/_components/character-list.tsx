"use client";
import { ListItem } from "@/app/_components/list-item";
import type { Characters } from "@/lib/api";

type Props = { characters?: Characters };
export default function CharacterList({ characters }: Props) {
  if (!characters) return "...";
  return (
    <ul>
      {characters.map((character) => (
        <ListItem
          key={character._id}
          id={character._id}
          name={character.name}
          imageUrl={character.imageUrl || "https://placehold.co/30x30"}
        />
      ))}
    </ul>
  );
}
