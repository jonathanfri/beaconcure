const { LogExit } = require('concurrently');
const express   = require('express');
const router    = express.Router();
const utils     = require('../tools/utils');

/**
 * Route: GET /files
 *
 * Returns a list of files in a root directory.
 */
router.get("/files", (req, res, next) => 
{  
    const filenames = utils.readFolder();
    res.send(filenames);
});

/**
 * Route: GET /files/:fileName(string)
 *
 * Returns the JSON array in a file.
 */
router.get("/files/:fileName", (req, res, next) => 
{
    const data = utils.readFile(req.params.fileName);
    res.send(data.tables);
});

/**
 * Route: GET /files/:fileName(string)/tables/:tableTitle(string)
 *
 * Searches for a table and returns it if exists.
 */
router.get("/files/:fileName/tables/:tableTitle", (req, res, next) => 
{
    const data = utils.readFile(req.params.fileName);

    data.tables.forEach(table =>
    {
        if(table.title == req.params.tableTitle)
        {
            res.send(table);            
        }
    });        
});

module.exports = router;