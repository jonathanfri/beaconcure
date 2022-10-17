const fs = require('fs');
const root = "./uploads";

/**
 * readFolder
 *
 * Returns a string array of file names.
 *
 * @returns {string[]|*[]}
 */
exports.readFolder = function()  
{
    if(fs.existsSync(root))
    {
        const filenames = fs.readdirSync('uploads');
        return filenames;
    }   
    
    console.log("Folder doesn't exist: " + root);

    return [];
}

/**
 * readFile
 *
 * Returns the content of a file. *
 *
 * @param fileName
 * @returns {{}|any}
 */
exports.readFile = function(fileName) 
{
    const path = root + "/" + fileName;

    if(fs.existsSync(path))
    {
        const data = fs.readFileSync(path, {encoding:'utf8', flag:'r'});
        return JSON.parse(data);     
    }

    console.log("File doesn't exist: " + path);

    return {};   
};
