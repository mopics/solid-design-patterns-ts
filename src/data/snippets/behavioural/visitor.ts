export const visitor = `interface ShapeVisitor {
  visitCircle(shape: Circle): string
  visitRectangle(shape: Rectangle): string
}

interface Shape {
  accept(visitor: ShapeVisitor): string
}

class Circle implements Shape {
  constructor(readonly radius: number) {}
  accept(visitor: ShapeVisitor): string { return visitor.visitCircle(this) }
}

class Rectangle implements Shape {
  constructor(readonly width: number, readonly height: number) {}
  accept(visitor: ShapeVisitor): string { return visitor.visitRectangle(this) }
}

// Add behaviour without modifying shapes
class AreaCalculator implements ShapeVisitor {
  visitCircle(s: Circle): string {
    return \`Circle area: \${(Math.PI * s.radius ** 2).toFixed(2)}\`
  }
  visitRectangle(s: Rectangle): string {
    return \`Rectangle area: \${s.width * s.height}\`
  }
}

class SVGExporter implements ShapeVisitor {
  visitCircle(s: Circle): string {
    return \`<circle r="\${s.radius}" />\`
  }
  visitRectangle(s: Rectangle): string {
    return \`<rect width="\${s.width}" height="\${s.height}" />\`
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)]
const calc = new AreaCalculator()
shapes.forEach(s => console.log(s.accept(calc)))`
