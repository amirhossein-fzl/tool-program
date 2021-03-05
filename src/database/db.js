const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const isBuild = process.env.NODE_ENV === 'production';
const DBPath = path.join(
    /* global __static */
    isBuild ? __dirname : __static,
    './app.db',
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
}

module.exports = new DB();
