import RandomCharacters from "@/app/_components/random-characters";
import { QueryClientProviderWrapper } from "@/lib/test-utils";
import { render, screen } from "@testing-library/react";
import nock from "nock";

jest.mock("@/lib/utils");

const buildComponent = () =>
  render(
    <QueryClientProviderWrapper>
      <RandomCharacters />
    </QueryClientProviderWrapper>
  );

console.log(process.env.NEXT_PUBLIC_API_ENDPOINT);
const getCharacterMock = nock("https://api.disneyapi.dev/")
  .get("/character/112")
  .reply(200, {
    info: {},
    data: {
      name: "Character mock",
      imageUrl: "https://fakeimgurl.site/unknown.jpg",
    },
  });

describe("Main success scenario", () => {
  it("Renders when set the correct data", async () => {
    const { debug } = buildComponent();
    console.log(debug());
    expect(screen.getAllByText("Achilles")).toHaveLength(2);
    // expect(screen.getAllByText("Character mock")).toHaveLength(2);
  });
});
