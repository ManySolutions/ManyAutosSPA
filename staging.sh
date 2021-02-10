#!/bin/bash
npm install #install packages
# rmdir "./node_modules/.cache/hard-source" /s /q 
rm -rf "./node_modules/.cache/hard-source"
npm run build:staging # generate build
pm2 start ecosystem.staging.config.js # start app