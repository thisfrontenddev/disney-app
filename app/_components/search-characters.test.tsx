import SearchCharacters from "@/app/_components/search-characters";
import { QueryClientProviderWrapper } from "@/mocks/utils";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("@uidotdev/usehooks", () => ({
  // there's an issue with useDebounce with tests,
  // mocking it for now
  useDebounce: (val: string, shift: number) => val,
}));

const buildComponent = () =>
  render(
    <QueryClientProviderWrapper>
      <SearchCharacters />
    </QueryClientProviderWrapper>
  );

const user = userEvent.setup();

describe("Main success scenario", () => {
  it("renders with the initial data", async () => {
    const { getByRole, queryAllByText, queryAllByRole } = buildComponent();
    const searchInput = getByRole("searchbox");
    expect(searchInput).toHaveValue("");

    expect(queryAllByRole("listitem").length).toBe(0);

    await waitFor(() => {
      expect(queryAllByRole("listitem").length).toBe(3);
    });
  });

  it("displays search results when entered a seach term", async () => {
    const { getByRole, getAllByRole, getByText } = buildComponent();

    const searchInput = getByRole("searchbox");
    expect(searchInput).toHaveValue("");

    await user.type(searchInput, "Ahadi");
    expect(searchInput).toHaveValue("Ahadi");
    expect(getAllByRole("listitem").length).toBe(1);
    expect(getByText(/Ahadi/)).toBeInTheDocument();
  });
});
