import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.join(__dirname, 'src/assets');
const quality = 50; // You can adjust this value (0-100)

// Get all JPG files
const files = fs.readdirSync(sourceDir).filter(file => 
    file.toLowerCase().endsWith('.jpg') || 
    file.toLowerCase().endsWith('.jpeg')
);

async function convertImages() {
    for (const file of files) {
        const inputPath = path.join(sourceDir, file);
        const outputPath = path.join(sourceDir, file.replace(/\.(jpg|jpeg)$/i, '.webp'));
        
        try {
            await sharp(inputPath)
                .webp({ quality: quality })
                .toFile(outputPath);
            console.log(`Successfully converted ${file} to WebP`);
        } catch (error) {
            console.error(`Error converting ${file}:`, error);
        }
    }
}

convertImages().catch(console.error); 