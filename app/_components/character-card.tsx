import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Character } from "@/lib/api";
import Link from "next/link";

type Props = { character?: Character };
export default function CharacterCard({ character }: Props) {
  if (!character) return "...";
  const imageUrl = character.imageUrl || "https://placehold.co/64x64";
  return (
    <Link className="flex-grow" href={`/character/${character._id}`}>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-[64px] h-[64px] object-cover"
            src={imageUrl}
            alt={character.name}
          />
          <div className="flex flex-col">
            <CardTitle>{character.name}</CardTitle>
            <CardDescription>
              {character.films?.[0] || character.tvShows?.[0]}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
