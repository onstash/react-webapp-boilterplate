# React webapp boilerplate

A simple boilerplate to get started off working with react using webpack. Features include hot-module replacement (HMR) for development and community suggested best practices from this [guide](https://webpack.js.org/guides/). If you're new to webpack, head over to [Webpack academy](https://webpack.academy/) to understand the basics and dive into webpack's [docs](https://webpack.js.org/).

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

```shell
yarn
```

## Running a development server

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/<username>/react-webapp-boilterplate.git
cd react-webapp-boilerplate/
yarn dev
```

### Building

In order to build and ship a production version of your code, use the following.

```shell
yarn build
```

The above command generates a build with the following -

* `index.html`
* `vendor.[hash].js`
* `app.[hash].js`
* `runtime.[hash].js`
* `app.[hash].css` (if you're using SASS in your app)
* `bundle-analyser-report.html` (this will be automatically opened in your browser just after `yarn build` finishes)
* `stats.json`

### Deploying / Publishing

You can publish the contents of `build/` directory to any static hosting site like [`surge`](https://surge.sh) or you can host it on your server. This repo does not talk about server-side rendering.

## Features

What's all the bells and whistles this project can perform?

Get you started with a webpack based build system to build react apps.

## Contributing

When you publish something open source, one of the greatest motivations is that
anyone can just jump in and start contributing to your project.

If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are warmly welcome.

## Licensing

The code in this project is licensed under MIT license.
