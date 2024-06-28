"use client";

import { ListItem } from "@/app/list-item";
import { Input } from "@/components/ui/input";
import { findCharacter, getCharacters } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";
import { ChangeEventHandler, useState } from "react";

export default function Characters() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const {
    data: initialCharacters,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["characters"],
    queryFn: () => getCharacters(),
  });

  const { data: searchResults } = useQuery({
    queryKey: ["findCharacters", debouncedSearchTerm],
    queryFn: () => findCharacter(debouncedSearchTerm),
  });

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchTerm(e.target.value);
  };

  const dataset =
    debouncedSearchTerm.length === 0 ? initialCharacters : searchResults;

  return (
    <>
      <Input
        className="my-4"
        type="search"
        placeholder="Search for any character"
        onChange={handleSearchChange}
      />
      <ul>
        {dataset?.data.map((character) => (
          <ListItem
            key={character._id}
            id={character._id}
            name={character.name}
            imageUrl={character.imageUrl || "https://placehold.co/30x30"}
          />
        ))}
      </ul>
    </>
  );
}
