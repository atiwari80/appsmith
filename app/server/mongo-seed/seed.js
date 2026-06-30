function seedUsers() {
    const bcryptPassword = "your_password_hash";
    return [
        { username: 'admin', password: bcryptPassword, roles: ['admin'] };
    ];
}

module.exports = seedUsers;

// Removed bcrypt hash
