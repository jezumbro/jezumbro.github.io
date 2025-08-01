import { exec } from 'child_process'
import { cp } from 'fs/promises'
import { join } from 'path'

const TARGET_DIR = '../../github-action-notion'

function changeDirectory() {
  try {
    process.chdir(TARGET_DIR)
    console.log(`Changed working directory to: ${process.cwd()}`)
  } catch (error) {
    console.error('Error changing directory:', error)
    throw error
  }
}

async function runNpmStart() {
  return new Promise((_, reject) => {
    exec('npm start', (error) => {
      if (error) {
        reject(error)
        return
      }
    })
  })
}

async function copyPosts(inputDir: string) {
  const sourceDir = join(process.cwd(), '_posts')
  const targetDir = join(inputDir, '..', 'src', 'content', 'post')

  try {
    await cp(sourceDir, targetDir, { recursive: true })
    console.log('Posts copied successfully')
  } catch (error) {
    console.error('Error copying posts:', error)
    throw error
  }
}

async function main() {
  try {
    const currentDir = process.cwd()
    changeDirectory()
    await runNpmStart()
    await copyPosts(currentDir)
  } catch (error) {
    console.error('Error in development content script:', error)
    process.exit(1)
  }
}

main()
