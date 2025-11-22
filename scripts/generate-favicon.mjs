import fs from 'fs'
import { dirname, join } from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')

const svgPath = join(rootDir, 'public', 'favicon.svg')
const publicDir = join(rootDir, 'public')

// Read SVG file
const svgBuffer = fs.readFileSync(svgPath)

// Generate favicon-16x16.png
await sharp(svgBuffer)
  .resize(16, 16)
  .png()
  .toFile(join(publicDir, 'favicon-16x16.png'))

console.log('✓ Generated favicon-16x16.png')

// Generate favicon-32x32.png
await sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toFile(join(publicDir, 'favicon-32x32.png'))

console.log('✓ Generated favicon-32x32.png')

// Generate apple-touch-icon (180x180)
const iconsDir = join(publicDir, 'icons')
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true })
}

await sharp(svgBuffer)
  .resize(180, 180)
  .png()
  .toFile(join(iconsDir, 'apple-touch-icon.png'))

console.log('✓ Generated icons/apple-touch-icon.png')

console.log('\n✅ All favicon files generated successfully!')
