#!/usr/bin/env bash
set -euo pipefail

echo "==> Running html-proofer against docs/..."
bundle exec htmlproofer docs/ \
  --ignore-urls "/platform.twitter.com/,/twitter.com/,/x.com/,/t.co/,/fonts.googleapis.com/,/fonts.gstatic.com/,/twitch.tv/,/bijanberahimi.com/,/blogs.nvidia.com/,/designobserver.com/,/github.com\/stedmanhalliday\/cupids-cards/,/skrrtStats2024/" \
  --ignore-status-codes "0,301,403,429,999" \
  --no-enforce-https \
  --allow-missing-href \
  --allow-hash-href \
  --ignore-missing-alt \
  --swap-urls "^https\://stedmanhalliday\.com:" \
  --checks Links,Scripts

echo "==> HTML validation passed!"
