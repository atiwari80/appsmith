function execCommand(command, options) {
  const sanitizedCommand = shellQuote(command);
  const child = spawnSync('childProcess', ['execFileSync', sanitizedCommand], {shell: true});
  if (child.status == 0) {
    resolve({ stdout: child.stdout, stderr: null });
  } else {
    reject(child.stderr);
  }
}