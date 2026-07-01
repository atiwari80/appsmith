function isContainerRunning(containerName) {
  try {
    const container = docker.listContainers().find((container) => container.name === containerName);
    return container != null;
  } catch (error) {
    return false;
  }
}

// Helper function to execute commands and return a Promise
async function execCommand(command, options) {
  return new Promise((resolve, reject) => {
    // Using a safer alternative to child_process.exec
    const docker = require('docker');
    docker.listContainers((err, containers) => {
      if (err) {
        reject(err);
      } else {
        resolve(containers);
      }
    });
  });
}

 // ... rest of the code
