---
name: docker-release
description: >-
  Build and push a multi-platform (linux/amd64 + linux/arm64) Docker image
  for this repo to Docker Hub as fanaur/educatives-primary-school-games.
  Use when the user asks to build/push a Docker image, publish a release
  image, or update the image on the server.
---

# Docker Release

Publishes a cross-platform Docker image of this app from a given branch
(normally `main`) to Docker Hub.

## Image

- Repo: `fanaur/educatives-primary-school-games` (hyphens — matches
  `docker-compose.yml`'s `image:` field and the repo already on Docker Hub).
  Never push to an underscore variant (`educatives_primary_school_games`) —
  that is a different, unrelated Hub repo.
- Tags: `latest` and the short commit SHA being built (e.g. `dff3b3c`).
- Platforms: `linux/amd64,linux/arm64` — the dev machine may be Apple
  Silicon (arm64) but the deploy server is amd64, so a single-arch build
  will fail to pull there with "no matching manifest". Always build both.

## Prerequisites

- Docker Desktop running (`open -a Docker`, then poll `docker info` until
  it succeeds).
- Logged in to Docker Hub (`docker login`, run by the user interactively —
  never type credentials for them). Verify with:
  `cat ~/.docker/config.json | python3 -c "import json,sys; print(list(json.load(sys.stdin).get('auths',{}).keys()))"`
  — should include `https://index.docker.io/v1/`.
- A buildx builder with container driver for multi-platform output. Check
  `docker buildx ls`; if a `multiarch-builder` exists, bootstrap it with
  `docker buildx inspect multiarch-builder --bootstrap`. Otherwise create
  one: `docker buildx create --name multiarch-builder --driver docker-container --use`.

## Steps

1. Build from a clean checkout of the target branch, not the working
   directory in use for other work (it may have unrelated local changes).
   Use a throwaway git worktree:
   ```bash
   git fetch origin main
   git worktree add /tmp/edu-games-build origin/main --detach
   ```
2. Build and push in one step with buildx (`--push` avoids a separate
   `docker push`, since multi-platform images can't be `docker build`-ed
   to the local image store):
   ```bash
   cd /tmp/edu-games-build
   SHA=$(git rev-parse --short HEAD)
   docker buildx build --builder multiarch-builder \
     --platform linux/amd64,linux/arm64 \
     -t fanaur/educatives-primary-school-games:latest \
     -t fanaur/educatives-primary-school-games:$SHA \
     --push .
   ```
3. Clean up the worktree:
   ```bash
   cd /Users/fanaur/Repository/educatives_primary_school_games
   git worktree remove /tmp/edu-games-build --force
   ```
4. Tell the user to pull/redeploy on the server:
   ```bash
   docker pull fanaur/educatives-primary-school-games:latest
   ```

## Notes

- This is a visible, external action (pushes to a public registry) —
  confirm the target repo name and that the user is logged in before
  pushing, per the standing instruction-source/explicit-permission rules.
- If `docker push`/`buildx build --push` fails with an auth error, the
  user needs to re-run `docker login` themselves — don't attempt to
  collect or enter their password.
