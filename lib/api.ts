type InfoMetadata = {
  count: number;
  nextPage: string;
  previousPage: string;
  totalPages: number;
};

type Character = {
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

type Characters = Character[];

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
  const resp = await fetch(new URL(`${baseUrl}?${searchParams}`));
  return resp.json();
}

export async function getCharacter(id: string): Promise<{
  info: InfoMetadata;
  data: Character;
}> {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/character/${id}`
  );
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
  return resp.json();
}
