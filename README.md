# Latest build plugin

A simple timestamp log after webpack builds.

```
   ...

   Build completed at Thu Apr 26 2019 12:34:56 GMT+0800 (PDT)
```

## Installation
`npm install webpack-build-timestamp --save-dev`
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
