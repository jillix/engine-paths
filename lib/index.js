"use strict";

const path = require("path")
    , abs = require("abs")
    ;

class EnginePaths {
    /**
     * EnginePaths
     * Creates a new instance of `EnginePaths`.
     *
     * @name EnginePaths
     * @function
     * @param {String} appPath The path to the Engine app.
     */
    constructor (appPath) {
        this.root = abs(appPath);
        this.package = path.join(this.root, "package.json");
        this.composition = path.join(this.root, "composition");
        this.service = path.join(this.root, ".service.json");
    }

    /**
     * instance
     * Gets the absolute path to the JSON file.
     *
     * @name instance
     * @function
     * @param {String} name The instance name (without the `.json` suffix).
     * @return {String} The absolute path to the instance file.
     */
    instance (name) {
        return path.join(this.composition, name + ".json");
    }
}

module.exports = EnginePaths;
