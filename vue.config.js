module.exports = {
    pluginOptions: {
        electronBuilder: {
            externals: ['sqlite3'],
            nodeIntegration: true,
            builderOptions: {
                extraResources: ['src/database/app.db']
            }
        }
    }
};