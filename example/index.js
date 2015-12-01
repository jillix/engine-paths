const EnginePaths = require("../lib");

var paths = new EnginePaths("path/to/your/app");

console.log(paths.root);
console.log(paths.composition);
console.log(paths.package);
console.log(paths.service);
console.log(paths.instance("some-instance"));
