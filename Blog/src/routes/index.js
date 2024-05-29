const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
    // test route
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;
