const pdf = require('pdf-parse');
const fs = require('fs');

async function main() {
  try {
    const buf1 = fs.readFileSync('src/assets/documents/Evolvix Global.pdf');
    const d1 = await pdf(buf1);
    console.log('=== PDF 1: Evolvix Global ===');
    console.log(d1.text);
  } catch(e) {
    console.log('PDF1 error:', e.message);
  }

  try {
    const buf2 = fs.readFileSync('src/assets/documents/evolvix Global 2.pdf');
    const d2 = await pdf(buf2);
    console.log('=== PDF 2: evolvix Global 2 ===');
    console.log(d2.text);
  } catch(e) {
    console.log('PDF2 error:', e.message);
  }
}

main();
