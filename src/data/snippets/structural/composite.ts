export const composite = `interface FileSystemItem {
  name: string
  size(): number
}

class File implements FileSystemItem {
  constructor(public name: string, private bytes: number) {}
  size(): number { return this.bytes }
}

class Folder implements FileSystemItem {
  private children: FileSystemItem[] = []
  constructor(public name: string) {}

  add(item: FileSystemItem): void { this.children.push(item) }

  size(): number {
    return this.children.reduce((total, child) => total + child.size(), 0)
  }
}

const root = new Folder('root')
const src  = new Folder('src')
src.add(new File('index.ts', 1200))
src.add(new File('app.ts',   3400))
root.add(src)
root.add(new File('README.md', 800))

console.log(root.size()) // 5400 — uniform interface for files and folders`
