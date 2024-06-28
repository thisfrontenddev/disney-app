"use client";

import CharacterList from "@/app/_components/character-list";
import { Input } from "@/components/ui/input";
import { findCharacter, getCharacters } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";
import { ChangeEventHandler, useState } from "react";

export default function SearchCharacters() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const { data: initialCharacters, error: initialCharactersError } = useQuery({
    queryKey: ["characters"],
    queryFn: () => getCharacters(),
  });

  const { data: searchResults, error: searchResultsError } = useQuery({
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
      <CharacterList characters={dataset?.data} />
    </>
  );
}
