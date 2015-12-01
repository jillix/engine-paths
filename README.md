# engine-paths

## Installation

```sh
$ npm i --save engine-paths
```

## Example

```js
const EnginePaths = require("engine-paths");

var paths = new EnginePaths("path/to/your/app");

console.log(paths.root);
console.log(paths.composition);
console.log(paths.package);
console.log(paths.service);
console.log(paths.instance("some-instance"));
```

## Documentation

### path

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [jillix][website]

[license]: http://showalicense.com/?fullname=jillix%20%3Ccontact%40jillix.com%3E%20(http%3A%2F%2Fjillix.com)&year=#license-mit
[website]: http://jillix.com
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md