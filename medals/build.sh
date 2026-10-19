#!/bin/sh
# Assemble les lots de médaillons en un seul fichier medals.js à la racine
cd "$(dirname "$0")/.."
{ echo "// Médaillons dessinés, un par badge (généré depuis medals/lot-*.js et medals/exos-*.js : ne pas modifier à la main, modifier les lots puis relancer medals/build.sh)"; echo "window.MEDALS=window.MEDALS||{};"; for f in medals/lot-1.js medals/lot-2.js medals/lot-3.js medals/lot-4.js medals/lot-5.js medals/exos-1.js medals/exos-2.js; do echo "// ---- $f ----"; cat "$f"; echo; done; } > medals.js
echo "medals.js : $(wc -c < medals.js) octets"
