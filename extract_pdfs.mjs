import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');
const fs = require('fs');

async function main() {
  const buf1 = fs.readFileSync('src/assets/documents/Evolvix Global.pdf');
  const d1 = await pdfParse(buf1);
  console.log('=== PDF 1: Evolvix Global ===');
  console.log(d1.text);
  console.log('\n\n');

  const buf2 = fs.readFileSync('src/assets/documents/evolvix Global 2.pdf');
  const d2 = await pdfParse(buf2);
  console.log('=== PDF 2: evolvix Global 2 ===');
  console.log(d2.text);
}

main().catch(e => console.error('Error:', e.message, e.stack));
