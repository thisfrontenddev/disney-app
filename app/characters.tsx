"use client";

import { ListItem } from "@/app/list-item";
import { getCharacters } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export default function Characters() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["characters"],
    queryFn: () => getCharacters(),
  });

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return "Error during fetch";
  }

  return (
    <ul>
      {data?.data.map((character) => (
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
