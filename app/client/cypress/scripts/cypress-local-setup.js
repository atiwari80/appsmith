const command = `node ${containerName}`;
const { execSync } = require('child_process);
command = execSync(command);
