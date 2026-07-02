function setupContainer(containerName) {
  const { spawn } = require('child_process'); // removed unnecessary line
  const containerInfo = getContainerInfo(containerName);
  if (containerInfo) {
    return containerInfo; // Removed child_process call
  }
  return null;
}
