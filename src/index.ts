const directoryExists = require('./directoryExists');
const routes = require('./routes');

const dirname = '../ProcessedImages/';

// Check if directory exists if not make one
directoryExists.directoryExists(dirname);

// Build the API
routes.buildAPI();

export {};
