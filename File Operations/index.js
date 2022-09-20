const fsPromise = require('fs').promises;
const path = require('path');


const fileControl = async () => {
    try {
        const data = await fsPromise.readFile(path.join(__dirname, 'files', 'input.txt'), 'utf8'); // Read from file
        console.log(data);
        await fsPromise.unlink(path.join(__dirname, 'files', 'input.txt')); // Delete file
        await fsPromise.writeFile(path.join(__dirname, 'files', 'output.txt'), data); // Create and write to file
        await fsPromise.appendFile(path.join(__dirname, 'files', 'output.txt'), '\n\nTesting.... Appended second line'); // Add data to a file
        await fsPromise.rename(path.join(__dirname, 'files', 'output.txt'), path.join(__dirname, 'files', 'outputComplete.txt')); // Rename file
        const newData = await fsPromise.readFile(path.join(__dirname, 'files', 'outputComplete.txt'), 'utf8');
        console.log(newData); 
    } catch (error) {
        console.log(error);
    }
}

fileControl();