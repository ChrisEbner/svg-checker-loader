# SVG-Checker-Loader

This webpack loader checks svg files for necessary attributes and reports to stdout which files lack what.

Requires Webpack.

### Usage

```js
module: {
    rules: [
        {
            test: /\.(svg)$/i,
            use: [
                {
                    loader: 'svg-checker-loader',
                    options: {
                    toCheck: ['viewBox', 'width', 'height']
                    }
                }
            ]   ,
        }
    ]
}
```

Hint: It can also be used to check for other stuff if you know what you are doing.

TODO:
- auto-add missing attributes and fill them
- make hint clearer by renaming the loader