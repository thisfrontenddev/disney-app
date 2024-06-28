import Characters from "@/app/characters";
import { getQueryClient } from "@/app/get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default async function HomePage() {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="container flex flex-col p-8">
        <h1 className="font-bold text-4xl mb-8">
          Find all about your favorite characters !
        </h1>
        <h2 className="font-semibold text-2xl mb-4">Check out these two...</h2>
        <h2 className="font-semibold text-2xl">
          ...or search for a specific one !
        </h2>
        <Characters />
      </main>
    </HydrationBoundary>
  );
}
