"use client";

import { Button } from "@/components/ui/button";
import { getCharacter } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Globe } from "lucide-react";
import Link from "next/link";

type Props = {
  id: string;
};
export default function Character({ id }: Props) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacter(id),
  });

  const character = data?.data;
  const imageUrl = character?.imageUrl || "https://placehold.co/128x128";
  return (
    <div className="flex flex-row gap-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={character?.name}
        className="flex-shrink-0 w-[128px] h-[128px] object-cover rounded-full"
      />
      <div className="flex flex-col">
        <h2 className="font-bold text-4xl">{character?.name}</h2>
        {!!character?.films.length && (
          <>
            <h3 className="font-semibold text-2xl mt-4">Movies</h3>
            <p>{character?.films.join(", ")}</p>
          </>
        )}
        {!!character?.tvShows.length && (
          <>
            <h3 className="font-semibold text-2xl mt-4">TV Shows</h3>
            <p>{character?.tvShows.join(", ")}</p>
          </>
        )}
        {!!character?.videoGames.length && (
          <>
            <h3 className="font-semibold text-2xl mt-4">Video Games</h3>
            <p>{character?.videoGames.join(", ")}</p>
          </>
        )}
        {!!character?.sourceUrl && (
          <p className="mt-4">
            <Link
              className="cursor-pointer font-normal"
              href={character.sourceUrl}
            >
              <Button>
                <Globe width={16} />
                <span className="pl-2">View on wiki</span>
              </Button>
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
