import fs from 'node:fs';

let toml = fs.readFileSync('netlify.toml', 'utf8');
const newCsp = "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https: wss:; worker-src 'self' blob: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com https://*.elevenlabs.io blob: data:; connect-src 'self' https://res.cloudinary.com https://*.elevenlabs.io wss://*.elevenlabs.io; media-src 'self' blob: data: https://res.cloudinary.com https://*.cloudinary.com https://*.elevenlabs.io; img-src 'self' data: https: blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com;";

toml = toml.replace(/Content-Security-Policy = "[^"]+"/, `Content-Security-Policy = "${newCsp}"`);
fs.writeFileSync('netlify.toml', toml);
console.log("CSP updated successfully!");
