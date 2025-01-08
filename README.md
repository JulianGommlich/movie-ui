# The Movie API

This Svelte app is an example Frontend for my lecture "Software Development" at [Duale Hochschule Baden-Württemberg](https://www.dhbw-vs.de/en/index.html). It shall show, how a basic Svelte app looks like and how to use Docker/Podman to containerize this Frontend.

## Run it locally

### Prerequisites - Local

- Node 20+
- NPM 10+

### How to - Local

To build and run the app locally, run:

```bash
npm run dev
```

## Run the container

### Prerequisites - Container

- Docker

Or

- Windows Subsystem for Linux (WSL)
- Podman

### How to - Container

To pull and run the container, run:

```bash
docker run -p 3000:3000 ghcr.io/juliangommlich/movie-ui:latest
```

or

```bash
podman run -p 3000:3000 ghcr.io/juliangommlich/movie-ui:latest
```
