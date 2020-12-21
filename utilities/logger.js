const fs = require('fs');
const { promisify } = require("util");
		
const appendFile = promisify(fs.appendFile);

exports.requestLogger= async (req, res, next) => {
    try {
        logMessage = `${new Date()} - ${req.method} - ${req.url} - ${req.body} \n`;
        await appendFile("./Loggers.log", logMessage);
        next();
    } catch (err) {
        
        console.log('Error Logging');
    }
};



