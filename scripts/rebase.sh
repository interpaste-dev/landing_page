#!/usr/bin/env sh
# Dopisuje prefiks ścieżki do zbudowanej strony, np. `scripts/rebase.sh /landing_page`.
# Potrzebne tylko przy hostingu w podkatalogu (GitHub Pages projektu); na własnej domenie nie używać.
set -eu
B="$1"
find dist -type f \( -name '*.html' -o -name '*.xml' -o -name '*.webmanifest' -o -name '*.txt' \) -exec sed -i -E \
  -e "s#(href|src|srcset|action)=\"/([^/])#\1=\"$B/\2#g" \
  -e "s#, /_astro/#, $B/_astro/#g" \
  -e "s#url\(/_astro/#url($B/_astro/#g" \
  -e "s#\"(start_url|src)\": ?\"/#\"\1\": \"$B/#g" \
  -e "s#(https://[a-z0-9-]+\.github\.io)/#\1$B/#g" \
  {} +
