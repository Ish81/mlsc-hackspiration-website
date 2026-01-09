# MLSC Hackspiration '26

## Setup and Installation

- Create a `.env` file in the root directory
- Add the following variables to the `.env` file

```bash
DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database>"
```

- Install dependencies and run the development server

```bash
pnpm install
pnpm run dev
```

## Database Setup

- Generate Prisma client and push the database schema

```bash
pnpm prisma generate
pnpm prisma db push
```

- Seed the database with sample data

```bash
npx ts-node prisma/seed.ts
```
