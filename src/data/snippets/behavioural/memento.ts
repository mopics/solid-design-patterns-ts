export const memento = `class EditorMemento {
  constructor(readonly content: string) {}
}

class Editor {
  private content = ''

  type(text: string): void { this.content += text }
  getContent(): string     { return this.content  }

  save(): EditorMemento         { return new EditorMemento(this.content)  }
  restore(m: EditorMemento): void { this.content = m.content }
}

class History {
  private mementos: EditorMemento[] = []

  push(m: EditorMemento): void { this.mementos.push(m) }

  pop(): EditorMemento | undefined { return this.mementos.pop() }
}

const editor  = new Editor()
const history = new History()

editor.type('Hello')
history.push(editor.save())

editor.type(' World')
history.push(editor.save())

editor.type('!!!')
console.log(editor.getContent()) // 'Hello World!!!'

editor.restore(history.pop()!)
console.log(editor.getContent()) // 'Hello World'

editor.restore(history.pop()!)
console.log(editor.getContent()) // 'Hello'`
