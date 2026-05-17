export const lsp = `class Bird {
  fly(): string { return 'flying' }
}

// ❌ Violates LSP — Penguin can't fly but inherits fly()
class Penguin extends Bird {
  fly(): string { throw new Error('Penguins cannot fly!') }
}

// ✅ Segregate by capability instead
interface Flyable {
  fly(): string
}

class Sparrow implements Flyable {
  fly(): string { return 'flap flap' }
}

class PenguinV2 {
  swim(): string { return 'splash splash' }
}

function makeFly(bird: Flyable): string {
  return bird.fly() // safe — all Flyable objects can fly
}`
