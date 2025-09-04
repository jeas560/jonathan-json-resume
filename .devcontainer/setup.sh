#!/usr/bin/env bash
set -euo pipefail
sudo apt-get update
sudo apt-get install -y libasound2 || sudo apt-get install -y libasound2t64
sudo apt-get install -y \
  libatk1.0-0 libatk-bridge2.0-0 libgtk-3-0 libnss3 libnspr4 libcups2 \
  libx11-6 libx11-xcb1 libxcomposite1 libxdamage1 libxrandr2 libxshmfence1 \
  libxtst6 libxss1 libxkbcommon0 libcairo2 libpango-1.0-0 libpangocairo-1.0-0 \
  libgbm1 fonts-liberation ca-certificates
npm ci || npm i
