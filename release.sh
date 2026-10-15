#!/bin/sh
# Pose le numéro de version (horodatage) dans index.html et version.json avant un push
cd "$(dirname "$0")"
V=$(date -u +%Y%m%d%H%M%S)
sed -i "s/const APP_VERSION='[^']*';/const APP_VERSION='$V';/; s/medals\.js?v=[0-9]*/medals.js?v=$V/" index.html
printf '{"v":"%s"}\n' "$V" > version.json
echo "version $V"
