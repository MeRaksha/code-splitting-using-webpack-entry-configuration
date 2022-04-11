# code-splitting-using-webpack-entry-configuration

Demo which uses webpack <code>entry</code> point configuration to manually split the chunks.

```sh
 entry: {
  index: './src/index.js',
  another: './src/another-module.js',
},
```


## Prevent duplicated modules between entry chunks
By default, every entry chunk stores all the modules that it uses. With <code>dependOn</code> option you can share the modules from one entry chunk to another:
webpack entry configuration becomes something like this:

```sh
entry: {
  index: {
    import: './src/index.js',
    dependOn: 'shared',
  },
  print: {
    import: './src/print.js',
    dependOn: 'shared',
  },
  shared: 'lodash',
 }
```

_The index and print chunk will not contain the modules that react-vendors have._
