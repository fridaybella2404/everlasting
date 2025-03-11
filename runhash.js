const crypto = require('crypto');
const fs = require('fs');

function generateHash(filePath) {
    const fileBuffer = fs.readFileSync(filePath); // Read the file
    const hashSum = crypto.createHash('sha256'); // Create a SHA-256 hash
    hashSum.update(fileBuffer); // Update hash with file content
    return hashSum.digest('hex'); // Get the hash in hexadecimal format
}

// Example usage
const hash = generateHash('c9bdc57af3da8c7a5f5221a406c022567100187ec3ac16baee.js'); // Replace with your actual file path
console.log("SHA-256 Hash:", hash);
