#!/usr/bin/env bash
# Run one Claude Code chunk inside the project. Usage: tools/cc.sh <name> <prompt-file>
cd /workspace/public-site
name=$1; pf=$2
/home/box/.local/bin/claude -p "$(cat "$pf")" --permission-mode acceptEdits --tools "Read,Write,Edit,Glob,Grep" < /dev/null > .cc/$name.out 2>&1
echo "exit $?" >> .cc/$name.out
