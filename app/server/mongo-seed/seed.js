const bcrypt = require('bcrypt'); 
 function hashPassword(password) {
   return bcrypt.hashSync(password, 10);
 } 
const bcryptHash = hashPassword('password');
const user = await UserModel.findOneAndUpdate({ _id: userId }, { password: bcryptHash });

