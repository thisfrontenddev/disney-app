import RandomCharacters from "@/app/_components/random-characters";
import { QueryClientProviderWrapper } from "@/mocks/utils";
import { render, waitFor } from "@testing-library/react";

jest.mock("@/lib/utils", () => {
  const original = jest.requireActual("@/lib/utils");
  return {
    ...original,
    randomNumber: jest.fn().mockReturnValue(112),
  };
});

const buildComponent = () =>
  render(
    <QueryClientProviderWrapper>
      <RandomCharacters />
    </QueryClientProviderWrapper>
  );

describe("Main success scenario", () => {
  it("renders two character cards, with data", async () => {
    const { getByTestId, queryAllByText, getAllByText } = buildComponent();
    expect(getByTestId("random-one")).toBeInTheDocument();
    expect(getByTestId("random-two")).toBeInTheDocument();

    expect(queryAllByText(/Achilles/).length).toBe(0);
    await waitFor(() => {
      expect(getAllByText(/Achilles/).length).toBe(2);
    });
  });
});
