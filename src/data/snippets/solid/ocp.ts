export const ocp = `interface Shape {
  area(): number
}

class Circle implements Shape {
  constructor(private radius: number) {}
  area(): number { return Math.PI * this.radius ** 2 }
}

class Rectangle implements Shape {
  constructor(private w: number, private h: number) {}
  area(): number { return this.w * this.h }
}

// ✅ Adding Triangle requires no changes to existing code
class Triangle implements Shape {
  constructor(private base: number, private height: number) {}
  area(): number { return 0.5 * this.base * this.height }
}

function totalArea(shapes: Shape[]): number {
  return shapes.reduce((sum, s) => sum + s.area(), 0)
}`
