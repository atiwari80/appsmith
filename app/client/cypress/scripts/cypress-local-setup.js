function executeCommand(command) {
  const { stdout, stderr } = childProcess.spawnSync(command, { shell: true });
  return { stdout, stderr);
}
