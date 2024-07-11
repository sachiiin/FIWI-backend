const crypto = require('crypto');

// Generate a secure random key
const generateSecretKey = () => {
    return crypto.randomBytes(32).toString('hex');
}

// Generate secret key
const secretKey = generateSecretKey();
console.log("Generated Secret Key:", secretKey);
