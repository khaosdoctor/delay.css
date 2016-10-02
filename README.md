![Delay.css logo](logo_title.png)

# delay.css [![Build Status Master](https://travis-ci.org/khaosdoctor/ngs.svg?branch=master)](https://travis-ci.org/khaosdoctor/delay.css)

> CSS animation timming helpers

## Stats

First, some stats!

### Info

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/khaosdoctor/ngs/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/khaosdoctor/ngs.svg)](https://github.com/khaosdoctor/ngs/issues)

### Code Status

|   Health	|   Coverage	|   Dependency	|
|:-:	|---	|---	|
|  [![Code Climate](https://codeclimate.com/github/khaosdoctor/delay.css/badges/gpa.svg)](https://codeclimate.com/github/khaosdoctor/delay.css) 	|   None	|  [![devDependencies Status](https://david-dm.org/khaosdoctor/delay.css/dev-status.svg)](https://david-dm.org/khaosdoctor/delay.css?type=dev) 	|

### Build Status

|  Master 	|  Dev 	|
|:-:	|---	|
|  [![Build Status Branch Master](https://travis-ci.org/khaosdoctor/delay.css.svg?branch=master)](https://travis-ci.org/khaosdoctor/delay.css)	|  [![Build Status Branch Dev](https://travis-ci.org/khaosdoctor/delay.css.svg?branch=dev)](https://travis-ci.org/khaosdoctor/delay.css)	|

## Whats is it

Delay.css works best along with [Daniel Eden's](@daneden) [Animate.css](https://github.com/daneden/animate.css), by including CSS classes and helpers to control animation timmings and delays, but it works on any kind of CSS animations as well.

In other words, it is possible to add sequential animations or increase the duration of a particular animation using only a tiny helper class.

> But we can also do this with CSS3, why add this?

Because of the same reason we have [Animate.css](https://github.com/daneden/animate.css), it is just easier to implement something that has already been done and tested than create something from scratch.

### TL;DR

Delay.css was created to help you control your CSS animation timmings within a project.

## Installing

Let's talk about kevin:

```
$ bower install delay.css
```

It also works with npm:

```
$ npm i delay.css
```

## Using

Delay.css is divided into 100ms blocks that goes from 100 to 6000 (100ms to 6s) of timming control.

This can be easily adjusted if you need less or more timming control (as you will see in the next section).

To use it, just add the corresponding classes to your elements, for instance:

```html
<div class="animate fade-up delay-1200"

## Wanna join the team?

Yeah! I'm always looking to find someone eager to contribute to this humble project! So, if you didn't yet, please read the [guidelines](CONTRIBUTING.md) before sending anything, this way we can discuss things more easily.

Once you are confortable, commit away! I promisse to read it ok?

## License

MPL 2.0 © [Lucas Santos](https://github.com/khaosdoctor)
