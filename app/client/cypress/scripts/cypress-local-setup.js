const { exec } = require('child_process');
  const command = 'npm run cypress run';
  try {
    const child = exec(command);
    console.log(child);
  }
  catch (error) {
    console.error(new Error(`Failed to execute command: ${error}`));
  }
