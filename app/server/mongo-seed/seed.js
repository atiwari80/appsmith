113 // hash the password
const passwordHash = crypto.createHash('sha256').update('my_password').digest('hex');

114 // compare
if (req.body.password === passwordHash) {