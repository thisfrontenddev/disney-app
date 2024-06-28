"use client";

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
        <li key={character._id}>{character.name}</li>
      ))}
    </ul>
  );
}
