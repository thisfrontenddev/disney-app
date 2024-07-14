import Search, { Props as PlaceholderProps } from "@/app/_components/search";
import { mockRouter } from "@/mocks/next-router-utils";
import { QueryClientProviderWrapper } from "@/mocks/utils";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultProps: PlaceholderProps = {
  placeholder: "Search something",
};
const buildComponent = (props?: Partial<PlaceholderProps>) => {
  return render(
    <QueryClientProviderWrapper>
      <Search {...defaultProps} {...props} />
    </QueryClientProviderWrapper>
  );
};

const user = userEvent.setup();

describe("Main success scenario", () => {
  it("renders with no value, and the right placeholder", async () => {
    const { getByRole } = buildComponent();
    const searchInput = getByRole("searchbox");
    expect(searchInput).toHaveValue("");
    expect(searchInput.getAttribute("placeholder")).toEqual(
      defaultProps.placeholder
    );
  });

  it("can change it's input's placeholder from props", async () => {
    const { getByRole } = buildComponent({ placeholder: "Custom placeholder" });
    const searchInput = getByRole("searchbox");
    expect(searchInput.getAttribute("placeholder")).toEqual(
      "Custom placeholder"
    );
  });

  it("changes the query params on input", async () => {
    const { getByRole } = buildComponent();
    const searchInput = getByRole("searchbox");

    expect(mockRouter.pathname).toEqual("/");
    await user.type(searchInput, "Ahadi");
    waitFor(() => {
      expect(mockRouter.pathname).toEqual("/?query=Ahadi");
    });
  });
});
