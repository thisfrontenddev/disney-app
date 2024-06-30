# Disney.db

The app is is currently deployed on Vercel : [Disney.db](https://disney-app-nine.vercel.app)

## Prerequisites

Copy `.env.example` to `.env.local` and `.env.test.local` for running the app and tests on your machine.

```bash
cp .env.example .env.local && cp .env.example .env.test.local
```

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
- Test more than components with network calls (integration/ snapshot/visual testing)

## Notes

- CI/CD is running through a Vercel integration and will be showcased in the interview
- Next.js 14's fetch global override has caused some issues for mocking network calls like I used to with MSW, will explain in the interview.
