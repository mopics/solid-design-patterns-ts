export const bridge = `// Implementation side
interface Renderer {
  renderCircle(radius: number): string
}

class SVGRenderer implements Renderer {
  renderCircle(r: number): string { return \`<circle r="\${r}" />\` }
}

class CanvasRenderer implements Renderer {
  renderCircle(r: number): string { return \`ctx.arc(0, 0, \${r}, 0, 2π)\` }
}

// Abstraction side — holds a reference to the implementation
abstract class Shape {
  constructor(protected renderer: Renderer) {}
  abstract draw(): string
}

class Circle extends Shape {
  constructor(private radius: number, renderer: Renderer) {
    super(renderer)
  }
  draw(): string { return this.renderer.renderCircle(this.radius) }
}

// Mix and match independently
const svgCircle    = new Circle(10, new SVGRenderer())
const canvasCircle = new Circle(10, new CanvasRenderer())`
