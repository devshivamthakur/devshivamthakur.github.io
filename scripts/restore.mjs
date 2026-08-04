import { copyFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const SRC_HTML = path.join(root, 'index.html');
const BACKUP_HTML = path.join(root, '.index.source.html');

if (existsSync(BACKUP_HTML)) {
  copyFileSync(BACKUP_HTML, SRC_HTML);
  console.log('→ Restored source index.html');
}
