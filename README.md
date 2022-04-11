# code-splitting-using-webpack-entry-configuration

Demo which uses webpack <code>entry</code> point configuration to manually split the chunks.

## _Topics Covered in this Demo_
- manually split the chunks using webpack <code>entry</code> point configuration 
- How to prevent duplication in multiple chunks 


### Create multiple entries :
webpack entry configuration becomes something like this:

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
  another: {
    import: './src/print.js',
    dependOn: 'shared',
  },
  shared: 'lodash',
 }
```

_The index and print chunk will not contain the modules that react-vendors have._
