#!/bin/bash

rm -rf dist && mkdir dist
cp ./package.json dist
cd dist && npm install --production
