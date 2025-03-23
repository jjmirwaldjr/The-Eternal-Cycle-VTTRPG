const fs = require('fs');
const path = require('path');

const starterPath = path.resolve(__dirname, 'compendium-starters/starter-compendiums.json');
const outputDir = path.resolve(__dirname, 'packs');

const data = JSON.parse(fs.readFileSync(starterPath, 'utf-8'));

function writeDbFile(entries, filename) {
  const dbPath = path.join(outputDir, filename);
  const lines = entries.map(entry => JSON.stringify(entry));
  fs.writeFileSync(dbPath, lines.join('\n'), 'utf-8');
  console.log(`Created: ${dbPath}`);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

writeDbFile(data.abilities, 'abilities.db');
writeDbFile(data.items, 'items.db');

console.log('✅ Conversion complete! Drop the generated .db files into your /packs/ folder.');
