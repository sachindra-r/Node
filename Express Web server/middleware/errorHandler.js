const { eventsLogger } = require('./eventsLogger');
const errorHandler = function (error, req, res, next) {
    eventsLogger(`${error.name}: ${error.message}`,  'errLog.txt');
    console.log(error.stack);
    res.status(500).send(error.message);
}

module.exports = errorHandler;