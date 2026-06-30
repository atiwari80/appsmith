function isContainerRunning(containerName) {
  return docker.containers.get(containerName.replace(/[^a-zA-Z0-9]/g, ''))
    .then(container = container.exists())
    .then(exists = exists);
}
