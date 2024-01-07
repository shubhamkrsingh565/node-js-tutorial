const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'curd');
const filePath = `${dirPath}/apple.txt`;

// Write into the file
// fs.writeFileSync(filePath, 'This is a simple text file');

// Read from the file
// fs.readFile(filePath, 'utf8', (error, item) => {
//     console.log(item);
// })

// Add to the file
fs.appendFile(filePath, ' and file name is apple.txt', (error) => {
    if(!error) console.log('file is updated');
});

// Rename the file
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if(!err) console.log('file name is updated');
// })

// Delete the file
// fs.unlinkSync(`${dirPath}/fruit.txt`);