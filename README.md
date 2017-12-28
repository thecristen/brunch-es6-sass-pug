# Brunch + Babel/ES6 + Sass + Pug

This is a skeleton for [Brunch](http://brunch.io) for a one-page static website (you could of course add more pages if you'd like). Warning: slightly opinionated!

## Features

* Babel/ES6 - write that modern JavaScript!
* Pug - use its templating and forget writing tedious HTML tags.
* Sass
* Auto-reload

### Opinionated things
* System fonts (San Francisco on MacOS, Segoe UI on Windows 10, etc.)
* Gutenberg for more typography Features
* IBM Design color palette

## Installation

Clone this repo (TODO: add to Brunch's skeleton list)

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)

## ES7

To use proposed JS features not included into ES6, do this:

* `npm install --save-dev babel-preset-stage-0`
* in `brunch-config.js`, add the preset: `presets: ['es2015', 'stage-0']`
