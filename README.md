# Twitter Bootstrap Reference App

This is a simple reference app using Bootstrap Responsive, Grunt and LESS

## Quick Start
* Make sure you have NPM installed in your development environment.
* Clone the repo `git clone https://github.com/tcornilliac/Responsive-Bootstrap-Reference-App.git`.
* Install the required modules

```shell
npm install
```

### Build the entire project
From the project root:

```shell
grunt
```

### Autocompile LESS and Javascript
Grunt can watch for Javascript and LESS changes and automatically compile, lint, concat and minify

```shell
grunt watch
```

Manually compile LESS

```shell
grunt less
```

Manually lint, concat and uglify Javascript

```shell
grunt js
```