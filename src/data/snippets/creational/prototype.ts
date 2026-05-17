export const prototype = `interface Cloneable<T> {
  clone(): T
}

class Circle implements Cloneable<Circle> {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public color: string,
  ) {}

  clone(): Circle {
    return new Circle(this.x, this.y, this.radius, this.color)
  }
}

const original = new Circle(0, 0, 10, 'red')
const copy = original.clone()
copy.color = 'blue'

console.log(original.color) // 'red'
console.log(copy.color)     // 'blue'`
