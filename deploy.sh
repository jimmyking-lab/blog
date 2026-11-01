#!/bin/bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
REMOTE="cming"
REMOTE_DIR="/home/cming/services/cming/deploy/frontend/notes-dist"

echo "==> Building..."
export PATH="$HOME/.nvm/versions/node/v24.22.0/bin:$PATH"
cd "$PROJECT_DIR"
pnpm build

echo "==> Syncing to remote..."
rsync -avz --delete dist/ "$REMOTE:$REMOTE_DIR/"

echo "==> Done. https://aixming.com"
