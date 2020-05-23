Yandex Praktikum **2020**
====
Diploma 
[![](https://img.shields.io/badge/version-1.1.0-green)](https://img.shields.io/badge/version-1.1.0-green)
===

Author / student Yandex Praktikum (09 flow): LanaLong
---


**`NewsAnalizer`** / project name

This project is a service for analyzing events in the world. Its task is to establish how popular the news is on a particular topic.

Project structure
-
*`Main`  page* (index) / allows to search news for the last week, contains author's information;

*Page  `About`* (about) / contains project information, slider with the GitHub commits;

*Page  `Analitics`* (analitics) / contains chartbar scheme with data of your search request.


This project contains techs:

HTML / CSS / JS (ES15-16) / GIT / Webpack (hot reloader: dev version) / work with API

[Project preview](https://lanalong.github.io/newsalalyzer/) on GitHub Pages  [&gt;&gt;](https://lanalong.github.io/newsalalyzer/)


Build setup:
-
#Download repository: 

`git clone https://github.com/LanaLong/newsanalyzer.git`

#[If you dasn't have [Node.js](https://nodejs.org/en/) – install it]

#Install dependencies:

`npm i`

#[If your OS is Windows – install win-node-env]

`npm install --save-dev win-node-env`

#Dev version on server with hot reload at http://localhost:8080/: 

`npm run dev`

#Output files to dist folder: 

`npm run build`

#To deploy the project on [GitHub Pages](https://lanalong.github.io/newsalalyzer/):

`npm run deploy`
