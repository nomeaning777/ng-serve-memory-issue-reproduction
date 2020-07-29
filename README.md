# ng serve OOM POC

## Environments

 * Ubuntu 18.04.4 LTS x86_64
 * Node v12.18.2

## Preconditions

 * It uses `@angular/localize`.
 * It is configured to use ES5.
 * It loads large object.
     * In this repository, `encoding-japanese` library has large objects to convert encoding.  
 * It is configured to generate sourcemaps (Default)

## Result

with localize and ES5 and sourcemap: ng serve consumes 7.1GB of memory
```shell
$ npm ci && /usr/bin/time -f '%M' node --max_old_space_size=8192 ./node_modules/@angular/cli/bin/ng serve
(skipped)
7113592
```

without sourcemap: ng serve consumes 0.8GB of memory
```shell
$ npm ci && /usr/bin/time -f '%M' node --max_old_space_size=8192 ./node_modules/@angular/cli/bin/ng serve --no-source-map
(skipped)
848624
```

without localize: ng serve consumes 0.8GB of memory
```shell
$ npm ci && /usr/bin/time -f '%M' node --max_old_space_size=8192 ./node_modules/@angular/cli/bin/ng serve -c disable-localize
(skipped)
813356
```

build target is ES2015: ng serve consumes 0.8GB of memory
```shell
$ npm ci && /usr/bin/time -f '%M' node --max_old_space_size=8192 ./node_modules/@angular/cli/bin/ng serve -c es2015
(skipped)
860044
```
