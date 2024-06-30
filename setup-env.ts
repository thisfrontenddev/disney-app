import "@testing-library/jest-dom";

const HOST = process.env.NEXT_PUBLIC_API_ENDPOINT;
const fetchMock = jest.fn().mockImplementation((url: string) => {
  const pathname = url.replace(`${HOST}`, "");
  /**
   * Not great but for the sake of the exercise.
   * Had trouble implementing network mock for client-side calls,
   * so falling back to this just for showcasing tests.
   */
  switch (pathname) {
    case "/character?page=1&pageSize=15":
      return {
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            info: {},
            data: [
              {
                _id: "112",
                name: "Achilles",
                imageUrl: "https://fakeimgurl.site/unknown.jpg",
                movies: ["Hercules (film)"],
                tvShows: ["Hercules (TV series)"],
                videoGames: ["Kingdom Hearts III"],
              },
              {
                _id: "139",
                name: "Ahadi",
                imageUrl: "https://fakeimgurl.site/unknown.jpg",
                movies: ["The Lion King, The Lion King (2019 film)"],
              },
              {
                _id: "204",
                name: "Ambrose",
                imageUrl: "https://fakeimgurl.site/unknown.jpg",
                movies: ["The Robber Kitten, Mickey's Polo Team"],
              },
            ],
          }),
      };
    case "/character/112":
      return {
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            info: {},
            data: {
              _id: "112",
              name: "Achilles",
              imageUrl: "https://fakeimgurl.site/unknown.jpg",
              movies: ["Hercules (film)"],
              tvShows: ["Hercules (TV series)"],
              videoGames: ["Kingdom Hearts III"],
            },
          }),
      };
    case "/character?name=Ahadi":
      return {
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            info: {},
            data: [
              {
                _id: "139",
                name: "Ahadi",
                imageUrl: "https://fakeimgurl.site/unknown.jpg",
                movies: ["The Lion King, The Lion King (2019 film)"],
              },
            ],
          }),
      };
    default:
      throw new Error(`Unhandled request: ${url}`);
  }
});

beforeAll(() => {
  global.fetch = fetchMock;
});
