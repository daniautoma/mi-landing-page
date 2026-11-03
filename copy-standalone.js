const fs = require("fs");
const path = require("path");

function copyDir(src, dest) {
    if (!fs.existsSync(src)) return;
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

const standalone = path.join(__dirname, ".next", "standalone");
if (fs.existsSync(standalone)) {
    const publicSrc = path.join(__dirname, "public");
    const publicDest = path.join(standalone, "public");
    copyDir(publicSrc, publicDest);

    const staticSrc = path.join(__dirname, ".next", "static");
    const staticDest = path.join(standalone, ".next", "static");
    copyDir(staticSrc, staticDest);

    console.log("✓ Successfully copied public and .next/static to .next/standalone for production serving.");
}

