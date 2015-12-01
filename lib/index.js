const path = require("path")
    , abs = require("abs")
    ;

class EnginePaths {
    constructor (appPath) {
        this.root = abs(appPath);
        this.package = path.join(this.root, "package.json");
        this.composition = path.join(this.root, "composition");
        this.service = path.join(this.root, ".service.json");
    }
    instance (name) {
        return path.join(this.composition_path, name + ".json");
    }
}

module.exports = EnginePaths;
