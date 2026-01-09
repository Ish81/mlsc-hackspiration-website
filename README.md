# MLSC Hackspiration '26

## Preview
- [Live Demo](https://mlsc-hackspiration26.vercel.app/)

## Pages
- Home Page - `/`
- Contest Page - `/contest`
- Shortlist Page - `/shortlist`

## Setup and Installation

- Copy the contents of `env.sample` to the `.env` file and update the variables accordingly
- Install dependencies and run the development server

```bash
pnpm install
```

- Database Setup

```bash
pnpm prisma generate
pnpm prisma db push
```

- Run the development server

```bash
pnpm run dev
```


- Seed the database with sample data

```bash
npx ts-node prisma/seed.ts
```

## Docker Setup

You can also run the application using Docker Compose.

1. Build and start the container:

```bash
docker-compose up --build -d
```

2. The application will be available at [http://localhost:3000](http://localhost:3000).

3. To stop the container:

```bash
docker-compose down -v
```
