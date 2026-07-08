const childProcess = require('child_process');

module.exports = async function(cypress) {
  const exec = childProcess.exec;
