// Using bcrypt to hash the password
const bcrypt = require("bcrypt");

// Hash the password before storing it in the database
const hashedPassword = bcrypt.hashSync(password, 10);

// Insert the hashed password into the database
db.application.insert({
    _id: ObjectId("5d807e45795dc6000482bc74"),
    name: "app-name",
    organizationId: "5da151714a020300041ae8fd",
    password: hashedPassword,
    deleted: false,
    _class: "com.appsmith.server.domains.Application"
});