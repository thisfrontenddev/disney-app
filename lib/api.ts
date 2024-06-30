export type InfoMetadata = {
  count: number;
  nextPage: string;
  previousPage: string;
  totalPages: number;
};

export type Character = {
  _id: number;
  allies: [];
  createdAt: string;
  ennemies: [];
  films: Array<string>;
  imageUrl: string;
  name: string;
  parkAttractions: [];
  shortFilms: [];
  sourceUrl: string;
  tvShows: Array<string>;
  updatedAt: string;
  url: string;
  videoGames: Array<string>;
};

export type Characters = Character[];

export async function getCharacters(
  params: Partial<{ page: string; pageSize: string }> = {
    page: "1",
    pageSize: "15",
  }
): Promise<{
  info: InfoMetadata;
  data: Characters;
}> {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/character`;
  const searchParams = new URLSearchParams(params);
  const resp = await fetch(`${baseUrl}?${searchParams}`);
  if (!resp.ok) throw new Error("Request failed");
  return resp.json();
}

export async function getCharacter(id: string): Promise<{
  info: InfoMetadata;
  data: Character;
}> {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/character/${id}`
  );
  if (!resp.ok) throw new Error("Request failed");
  return resp.json();
}

export async function findCharacter(searchTerm: string): Promise<{
  info: InfoMetadata;
  data: Characters;
}> {
  const term = encodeURI(searchTerm);
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/character?name=${term}`
  );
  if (!resp.ok) throw new Error("Request failed");
  return resp.json();
}
