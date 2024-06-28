"use client";

import { getCharacter } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

type Props = {
  id: string;
};
export default function Character({ id }: Props) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacter(id),
  });

  return <>Name: {data?.data.name}</>;
}
