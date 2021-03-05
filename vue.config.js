module.exports = {
    pluginOptions: {
        electronBuilder: {
            externals: ['sqlite3'],
            builderOptions: {
                extraResources: ['src/database/app.db']
            }
        }
    }
};