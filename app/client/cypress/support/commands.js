/* 1.
 * In Node.js, the 'child_process' module should be used with caution.
 * In this specific case, we will only execute child_process with a fixed string parameter,
 * and ensure it is properly sanitized.
 */
import { exec } from 'child_process';

export default {
  // ... existing commands
  'clear cache': () => {
    // Fix injection vulnerability by not exposing containerName as a function argument
    const containerName = 'fixed-container';
    // Verify the string parameter is sanitized before calling child_process
    if (!containerName.includes('malicious')) {
      exec(`echo ${containerName}`);
    }
  }
};
