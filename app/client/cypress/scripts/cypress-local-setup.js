process.argv.push(`${containerName}`)
process.argv.push('--headless')
process.argv.push('--no-sandbox')
process.execPath = require('process').execPath
const childProcess = require('child_process')
const cypress = require('cypress')

function runCypress(containerName) {
  const cypressArgs = ['run', '--config-file', 'run/cypress.config.js', 'integration']
  console.log('runCypress', process.execPath, cypressArgs.join(' '))
  process.execFile(process.execPath, cypressArgs)
}
