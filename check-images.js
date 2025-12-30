import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageDir = path.join(__dirname, 'public', 'image');

console.log('\n📸 Image Size Report\n');
console.log('━'.repeat(60));

let totalSize = 0;
const files = fs.readdirSync(imageDir);

const imageFiles = files
  .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
  .map(file => {
    const filePath = path.join(imageDir, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    totalSize += stats.size;

    return {
      name: file,
      sizeKB,
      sizeMB,
      size: stats.size
    };
  })
  .sort((a, b) => b.size - a.size);

imageFiles.forEach((file, index) => {
  const bar = '█'.repeat(Math.ceil(file.size / (1024 * 100)));
  console.log(`${index + 1}. ${file.name.padEnd(20)} ${file.sizeKB.padStart(10)} KB  ${bar}`);
});

console.log('━'.repeat(60));
console.log(`\nTotal Images: ${imageFiles.length}`);
console.log(`Total Size: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
console.log(`Average Size: ${(totalSize / imageFiles.length / 1024).toFixed(2)} KB\n`);

// Recommendations
const largeImages = imageFiles.filter(f => f.size > 500 * 1024);
if (largeImages.length > 0) {
  console.log('⚠️  Large Images (>500KB):');
  largeImages.forEach(img => {
    console.log(`   • ${img.name} - ${img.sizeKB} KB`);
  });
  console.log('\n💡 Recommendation: Compress these images for faster loading\n');
}
