const bcrypt = require('bcrypt'); var pw = 'your_password'; const salt = await bcrypt.genSalt(10);
const hashed = await bcrypt.hash(pw, salt);
console.log(hashed);
// Replace with the correct hashing