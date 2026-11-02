# Agent notes

## Docker image releases

The app's Docker image is published to Docker Hub as
`fanaur/educatives-primary-school-games` (hyphens — matches the `image:`
field in `docker-compose.yml`; the underscore variant
`educatives_primary_school_games` is a different, unrelated repo, don't
use it).

The deploy server runs `linux/amd64`; a local build on Apple Silicon is
`linux/arm64` only and won't pull there (`no matching manifest for
linux/amd64/v3`). Always build and push both platforms with `buildx`:

```bash
# from a clean checkout of main, e.g. a throwaway worktree
git fetch origin main
git worktree add /tmp/edu-games-build origin/main --detach
cd /tmp/edu-games-build

SHA=$(git rev-parse --short HEAD)
docker buildx build --builder multiarch-builder \
  --platform linux/amd64,linux/arm64 \
  -t fanaur/educatives-primary-school-games:latest \
  -t fanaur/educatives-primary-school-games:$SHA \
  --push .

cd /Users/fanaur/Repository/educatives_primary_school_games
git worktree remove /tmp/edu-games-build --force
```

Requires Docker Desktop running and `docker login` already done by the
user (never enter credentials on their behalf). See the
`docker-release` skill (`.claude/skills/docker-release/SKILL.md`) for
full prerequisites and troubleshooting.

On the server, redeploy with:

```bash
docker pull fanaur/educatives-primary-school-games:latest
```
