# Disney.db

The app is is currently deployed on Vercel : [Disney.db](https://disney-app-nine.vercel.app)

## Running the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running the tests

```bash
pnpm test
```

## Possible improvements

- Empty states for network calls
- Error management for network errors
- Fix the race condition issues for the random character polling
- Prevent having the same random character for both showcases
- Extract most of the async logic in dedicated hooks
- Remove `react-query` devtools for production
- Stop polling for new random characters when the window focus is gone with a resumable interval system
- Create a type-safe environment variable system (t3-env, zod...)
