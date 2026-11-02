# AutoSpace

AutoSpace is a TypeScript monorepo with a NestJS API, a Next.js web app, and a shared package.

## Requirements

- Node.js 22 or newer
- npm 9 or newer

## Install and run

```bash
npm install
npm run dev
```

The web app runs at `http://localhost:3000`. The API listens on `http://localhost:4000`, with a health response at `/health`.

## Workspaces

- `apps/api`: NestJS API
- `apps/web`: Next.js App Router frontend
- `packages/shared`: shared TypeScript contracts and constants

Useful commands:

```bash
npm run build
npm run lint
npm test
```
