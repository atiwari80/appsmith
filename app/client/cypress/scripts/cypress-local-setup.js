const { DockerClient } = require('dockerode');
const docker = new DockerClient();

function isContainerRunning(containerName) {
  return docker.containers.get(containerName)
    .then(container => container.exists())
    .then(exists => exists);
}