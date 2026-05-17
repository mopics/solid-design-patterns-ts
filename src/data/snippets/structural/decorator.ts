export const decorator = `interface TextProcessor {
  process(text: string): string
}

class PlainText implements TextProcessor {
  process(text: string): string { return text }
}

// Each decorator wraps another TextProcessor
class TrimDecorator implements TextProcessor {
  constructor(private wrapped: TextProcessor) {}
  process(text: string): string { return this.wrapped.process(text).trim() }
}

class UpperCaseDecorator implements TextProcessor {
  constructor(private wrapped: TextProcessor) {}
  process(text: string): string { return this.wrapped.process(text).toUpperCase() }
}

class ExclamationDecorator implements TextProcessor {
  constructor(private wrapped: TextProcessor) {}
  process(text: string): string { return this.wrapped.process(text) + '!' }
}

// Stack decorators at runtime
const processor = new ExclamationDecorator(
  new UpperCaseDecorator(
    new TrimDecorator(new PlainText())
  )
)

console.log(processor.process('  hello world  ')) // 'HELLO WORLD!'`
