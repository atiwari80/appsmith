function setupContainer(containerName) {
  const containerInfo = getContainerInfo(containerName);
  if (containerInfo) {
    return containerInfo;
  }
  return null;
}
