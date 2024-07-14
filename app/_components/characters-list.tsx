import { ListItem } from "@/app/_components/list-item";
import { findCharacter, getCharacters } from "@/lib/api";

export type Props = { query: string };
export default async function CharactersList({ query }: Props) {
  let result;
  if (!query) {
    result = await getCharacters();
  } else {
    result = await findCharacter(query);
  }

  const characters = result?.data;

  if (characters.length === 0) return <p>No character found.</p>;

  return (
    <ul>
      {characters.map((character) => (
        <ListItem
          data-testid="list-item"
          key={character._id}
          id={character._id}
          name={character.name}
          imageUrl={character.imageUrl}
        />
      ))}
    </ul>
  );
}
