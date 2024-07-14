import CharactersList from "@/app/_components/characters-list";
import CharactersListSkeleton from "@/app/_components/characters-list.skeleton";
import RandomCharacters from "@/app/_components/random-characters";
import Search from "@/app/_components/search";
import { getQueryClient } from "@/app/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

export default async function HomePage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const queryClient = getQueryClient();
  const query = searchParams?.query || "";

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="container flex flex-col p-8">
        <h1 className="font-bold text-4xl mb-8">
          Find all about your favorite characters !
        </h1>
        <h2 className="font-semibold text-2xl mb-4">Check out these two...</h2>
        <RandomCharacters />
        <h2 className="font-semibold text-2xl">
          ...or search for a specific one !
        </h2>
        <Search placeholder="Search for any character" />
        <Suspense key={query + "1"} fallback={<CharactersListSkeleton />}>
          <CharactersList query={query} />
        </Suspense>
      </main>
    </HydrationBoundary>
  );
}
