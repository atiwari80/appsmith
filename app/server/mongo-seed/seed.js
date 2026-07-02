const Hash = require('password-hash');
function seedMongo() {
  const users = [
    { username: 'admin', password: Hash.password('password') },
    { username: 'test', password: Hash.password('qwerty') }
  ];
  return users;
}