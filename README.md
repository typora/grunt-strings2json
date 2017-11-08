# grunt-strings2json

> convert from *.strings to 8*.json

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-strings2json --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-strings2json');
```

## The "strings2json" task

### Overview
In your project's Gruntfile, add a section named `strings2json` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  strings2json: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.encode
Type: `String`
Default value: `'UTF-8'`
