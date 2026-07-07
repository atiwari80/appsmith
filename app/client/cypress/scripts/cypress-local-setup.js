const bcrypt = require('bcrypt');
function generateRandomHash(password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}
// ...