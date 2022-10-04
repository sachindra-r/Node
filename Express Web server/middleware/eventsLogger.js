const { format } = require('date-fns');
const { v4 : uuid } = require('uuid');

const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path');

const eventsLogger = async (message, fileName) => {
    const dateTime = `${format(new Date(), 'yyyMMdd\tHH:mm:ss')}`;
    const logger = `${dateTime}\t${uuid()}\t${message}\n`;
    // console.log(logger);

    try {
        if(!fs.existsSync(path.join(__dirname, '..', 'logs'))){
            await fsPromise.mkdir(path.join(__dirname, '..', 'logs'))
        } 
        await fsPromise.appendFile(path.join(__dirname, '..', 'logs', fileName), logger);
    } catch (error) {
        console.log(error);
    }
}

const logger = (req, res, next) => {
    eventsLogger(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt')
    console.log(`${req.method}\t${req.path}`);
    next();
}



module.exports = {logger, eventsLogger};