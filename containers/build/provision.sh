#!/bin/bash

apt-get update
#apt-get -y upgrade

cd /project
npm install typings
npm install babel-preset-es2015 
npm install
./node_modules/.bin/typings install
