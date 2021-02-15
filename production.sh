#!/bin/bash
npm install #install packages
# rmdir "./node_modules/.cache/hard-source" /s /q 
rm -rf "./node_modules/.cache/hard-source"
npm run build # generate build
pm2 start # start app