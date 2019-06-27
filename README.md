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
`yarn add webpack-build-timestamp --save-dev`

## Usage
Import the plugin in your webpack config:

```
import BuildTimestampPlugin = from "webpack-build-timestamp";
```

And add it to your plugins array:
```
plugins: [
  new BuildTimestampPlugin();
]
```
