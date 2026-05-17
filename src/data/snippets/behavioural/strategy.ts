export const strategy = `interface SortStrategy {
  sort(data: number[]): number[]
}

class BubbleSort implements SortStrategy {
  sort(data: number[]): number[] {
    const arr = [...data]
    for (let i = 0; i < arr.length; i++)
      for (let j = 0; j < arr.length - i - 1; j++)
        if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    return arr
  }
}

class QuickSort implements SortStrategy {
  sort(data: number[]): number[] {
    if (data.length <= 1) return data
    const [pivot, ...rest] = data
    return [
      ...this.sort(rest.filter(x => x <= pivot)),
      pivot,
      ...this.sort(rest.filter(x => x > pivot)),
    ]
  }
}

class Sorter {
  constructor(private strategy: SortStrategy) {}

  setStrategy(s: SortStrategy): void { this.strategy = s }

  sort(data: number[]): number[] { return this.strategy.sort(data) }
}

const sorter = new Sorter(new BubbleSort())
console.log(sorter.sort([3, 1, 4, 1, 5])) // [1, 1, 3, 4, 5]

sorter.setStrategy(new QuickSort())
console.log(sorter.sort([3, 1, 4, 1, 5])) // [1, 1, 3, 4, 5]`
