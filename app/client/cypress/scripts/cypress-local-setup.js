const command = `node ${containerName}`;
const execFileSync = require('child_process').execFileSync;
command = execFileSync(command);
