const { format } = require('date-fns');
const { v4 : uuid } = require('uuid');

const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path');

const eventsLogger = async (message, fileName) => {
    const dateTime = `${format(new Date(), 'yyyMMdd\tHH:mm:ss')}`;
    const logger = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logger);

    try {
        if(!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromise.mkdir(path.join(__dirname, 'logs'))
        } 
        await fsPromise.appendFile(path.join(__dirname, 'logs', fileName), logger);
    } catch (error) {
        console.log(error);
    }
}

module.exports = eventsLogger;