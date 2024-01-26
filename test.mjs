import os from 'node:os'
import fs from 'node:fs'
import path from 'node:path'
let githubToken = null

function getGithubToken() {
  if (!githubToken) {
    const home = os.homedir()
    // ~/.config/github-copilot/hosts.json
    let hostsFile = path.join(
      home,
      '.config',
      'github-copilot',
      'bus-hosts.json',
    )
    if (!fs.existsSync(hostsFile)) {
      // C:\Users\user\AppData\Local\github-copilot\hosts.json
      hostsFile = path.join(
        home,
        'AppData',
        'Local',
        'github-copilot',
        'bus-hosts.json',
      )
      if (!fs.existsSync(hostsFile)) {
        throw new Error('获取 GitHub Token 文件失败')
      }
    }
    const content = fs.readFileSync(hostsFile, { encoding: 'utf-8' })
    const hosts = JSON.parse(content)
    console.log(hosts)
    if ('github.com' in hosts) {
      githubToken = hosts['github.com']
    }
  }
  if (!githubToken) {
    throw new Error('获取 GitHub Token 失败')
  }
  return githubToken
}

console.log(getGithubToken())
