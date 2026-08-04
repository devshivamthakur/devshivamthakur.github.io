import { execSync } from 'child_process';
import { copyFileSync, cpSync, rmSync, existsSync, readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const SRC_HTML = path.join(root, 'index.html'); // Vite entry (source)
const BACKUP_HTML = path.join(root, '.index.source.html'); // saved source entry
const LEGACY_HTML = path.join(root, 'index.legacy.html'); // old one-file site
const DIST = path.join(root, 'dist');
const DIST_ASSETS = path.join(DIST, 'assets');
const ROOT_ASSETS = path.join(root, 'assets');

// 1. Restore the SOURCE index.html if a previous publish replaced it
if (existsSync(BACKUP_HTML)) {
  copyFileSync(BACKUP_HTML, SRC_HTML);
  console.log('→ Restored source index.html');
}

// 2. Build (fresh dist/)
console.log('→ Building with Vite...');
execSync('npm run build', { cwd: root, stdio: 'inherit' });

// 3. Save the source entry for the next publish
copyFileSync(SRC_HTML, BACKUP_HTML);

// 4. Deploy the build to the repo root (GitHub Pages user site)
rmSync(ROOT_ASSETS, { recursive: true, force: true });
if (existsSync(DIST_ASSETS)) {
  cpSync(DIST_ASSETS, ROOT_ASSETS, { recursive: true });
}
copyFileSync(path.join(DIST, 'index.html'), SRC_HTML);

// 5. Create 404.html from built index.html for SPA fallback on GitHub Pages
const DEST_404 = path.join(root, '404.html');
copyFileSync(path.join(DIST, 'index.html'), DEST_404);
console.log('→ Created 404.html fallback');

console.log('\n✅ Published to repo root.');
console.log('   Commit and push:  git add -A && git commit -m "deploy" && git push');
