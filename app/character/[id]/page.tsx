import Character from "@/app/character/[id]/character";
import { getQueryClient } from "@/app/get-query-client";
import { getCharacter } from "@/lib/api";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

type Props = { params: { id: string } };
export default async function CharacterPage({ params }: Props) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["character", params.id],
    queryFn: () => getCharacter(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="container flex flex-col p-8">
        <Character id={params.id} />
      </main>
    </HydrationBoundary>
  );
}
