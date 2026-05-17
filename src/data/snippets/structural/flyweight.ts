export const flyweight = `// Intrinsic (shared) state
class TreeType {
  constructor(
    readonly name: string,
    readonly color: string,
    readonly texture: string,
  ) {}

  draw(x: number, y: number): string {
    return \`Drawing \${this.name} at (\${x}, \${y})\`
  }
}

// Flyweight factory — reuses existing TreeType instances
class TreeTypeFactory {
  private cache = new Map<string, TreeType>()

  get(name: string, color: string, texture: string): TreeType {
    const key = \`\${name}-\${color}-\${texture}\`
    if (!this.cache.has(key)) {
      this.cache.set(key, new TreeType(name, color, texture))
    }
    return this.cache.get(key)!
  }
}

// Extrinsic (unique) state lives outside the flyweight
class Tree {
  constructor(
    private x: number,
    private y: number,
    private type: TreeType,
  ) {}

  draw(): string { return this.type.draw(this.x, this.y) }
}

const factory = new TreeTypeFactory()
const oak = factory.get('Oak', 'green', 'rough')

const forest = [
  new Tree(1, 2, oak),
  new Tree(5, 8, oak), // same TreeType object shared
]`
