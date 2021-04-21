const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const { promisify } = require('util');

const isBuild = process.env.NODE_ENV === 'production';
const DBPath = path.join(
  /* global __static */
  __static,
  isBuild ? "../" : "../src/database/",
  "./app.db"
);

class DB {
    constructor() {
        this.db = new sqlite3.Database(DBPath);
    }
    serialize(method) {
        this.db.serialize(() => {
            method();
        });
    }
    run(sql) {
        this.serialize(() => {
            this.db.run(sql);
        });
    }

    async getOption(option) {
        let result;
        let getAsync = promisify(this.db.get).bind(this.db);
        result = await getAsync("SELECT * FROM `options` " + "WHERE `option_key` = '" + option + "'");
        return result.option_value;
    }

    updateOption(option, newval) {
        this.run("UPDATE `options` SET `option_value` = '"+ newval +"' " + "WHERE `option_key` = '" + option + "'");
    }
}

module.exports = new DB();
