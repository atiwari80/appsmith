if (command) {
  console.log(`Executing command: ${command}`);
  globalThis.childProcess.execSync(command, { stdio: 'inherit' });
} else {
  console.log('No command provided.');
}
