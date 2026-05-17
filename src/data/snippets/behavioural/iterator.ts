export const iterator = `class Range {
  constructor(
    private start: number,
    private end: number,
    private step = 1,
  ) {}

  [Symbol.iterator](): Iterator<number> {
    let current = this.start
    const { end, step } = this

    return {
      next(): IteratorResult<number> {
        if (current <= end) {
          const value = current
          current += step
          return { value, done: false }
        }
        return { value: undefined as never, done: true }
      },
    }
  }
}

const range = new Range(1, 10, 2)

for (const n of range) {
  console.log(n) // 1, 3, 5, 7, 9
}

console.log([...new Range(0, 6, 3)]) // [0, 3, 6]`
