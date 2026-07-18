const path = require('path');

const appDir = process.env.APP_DIR || 'RegistrationApp';
const appPath = path.join(__dirname, appDir, 'app.js');

process.chdir(path.join(__dirname, appDir));
require(appPath);
