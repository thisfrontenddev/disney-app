"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Character } from "@/lib/api";
import Link from "next/link";
import { HTMLAttributes } from "react";

export type Props = { character?: Character } & HTMLAttributes<HTMLElement>;
export default function CharacterCard({ character, ...props }: Props) {
  const imageUrl = character?.imageUrl || "https://placehold.co/64x64";
  const image = character ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="w-[64px] h-[64px] object-cover"
      src={imageUrl}
      alt={character.name}
    />
  ) : (
    <Skeleton className="w-[64px] h-[64px] rounded-none" />
  );
  const name = character ? (
    character.name
  ) : (
    <Skeleton className="mb-1 w-[180px] h-[30px] rounded-none" />
  );
  const meta = character ? (
    <CardDescription>
      {character.films?.[0] ?? character.tvShows?.[0]}
    </CardDescription>
  ) : (
    <Skeleton className="w-[140px] h-[20px] rounded-none" />
  );

  const card = (
    <Card className="w-full" {...props}>
      <CardHeader className="flex flex-row items-center gap-4">
        {image}
        <div className="flex flex-col">
          <CardTitle>{name}</CardTitle>
          {meta}
        </div>
      </CardHeader>
    </Card>
  );

  if (!character) {
    return card;
  }
  return (
    <Link className="w-full" {...props} href={`/character/${character._id}`}>
      {card}
    </Link>
  );
}
