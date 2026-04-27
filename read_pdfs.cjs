const fs = require('fs');
const pdfParse = require('pdf-parse');

async function read() {
  try {
    const data1 = await pdfParse(fs.readFileSync('src/assets/documents/Evolvix Global.pdf'));
    console.log('=== PDF 1 ===\n', data1.text);
  } catch(e) { console.error("Error reading PDF 1", e); }
  
  try {
    const data2 = await pdfParse(fs.readFileSync('src/assets/documents/evolvix Global 2.pdf'));
    console.log('=== PDF 2 ===\n', data2.text);
  } catch(e) { console.error("Error reading PDF 2", e); }
}
read();
