#!/usr/bin/env bash
# Rebuild the site and publish it (source + built docs/) to GitHub Pages in one command.
#   ./publish.sh                 # validate, build, commit, push
#   ./publish.sh "Add 5 recipes" # custom commit message
set -euo pipefail
cd "$(dirname "$0")"
MSG="${1:-Publish $(date '+%Y-%m-%d %H:%M')}"
node src/build.js --validate-only            # stop early on recipe errors
node src/build.js
git add -A
if git diff --cached --quiet; then echo "Nothing changed; nothing to publish."; exit 0; fi
git commit -q -m "$MSG"
git -c credential.helper= -c credential.helper='!gh auth git-credential' push -q origin main
URL=$(node -p "const c=require('./site.config.js');c.siteUrl+c.basePath")
echo "Pushed. GitHub Pages usually updates within a minute: $URL"
