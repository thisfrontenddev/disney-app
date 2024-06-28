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
  const req = await fetch(new URL(`${baseUrl}?${searchParams}`));
  return req.json();
}

export async function getCharacter(id: number) {
  return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/character/${id}`);
}

export async function findCharacter(searchTerm: string) {
  const term = encodeURI(searchTerm);
  return fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/character?name=${term}`
  );
}
