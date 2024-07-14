import CharactersList, {
  Props as CharactersListProps,
} from "@/app/_components/characters-list";
import { QueryClientProviderWrapper } from "@/mocks/utils";
import { render } from "@testing-library/react";

const defaultProps: CharactersListProps = {
  query: "",
};
const buildComponent = () => {
  return render(
    <QueryClientProviderWrapper>
      <CharactersList query="ww" />
    </QueryClientProviderWrapper>
  );
};

describe("Main success scenario", () => {
  // @TODO
  it.skip("renders with no query, fetches with getCharacters", async () => {
    expect(true).toBe(true);
  });
});
