# Webpack build timestamp plugin

A simple timestamp log after webpack builds.

```
  ...

Build completed at Wed Jun 26 2019 19:13:22 GMT-0700 (Pacific Daylight Time)  

  ...
```

## Installation
`npm install webpack-build-timestamp --save-dev`  
  or  
`yarn add webpack-build-timestamp`  

## Usage
Import the plugin in `webpack-config.js`:

```
import BuildTimestampPlugin from "webpack-build-timestamp";
```

Add it to the plugins array in `webpack-config.js`:
```
plugins: [
  new BuildTimestampPlugin();
]
```
