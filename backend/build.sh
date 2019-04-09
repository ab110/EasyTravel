#!/bin/bash
rm -rf dist && mkdir dist
npx babel-cli backend --out-dir dist --ignore node_modules
cp backend/package.json dist
cd dist && npm install
