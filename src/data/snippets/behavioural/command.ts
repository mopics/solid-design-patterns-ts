export const command = `interface Command {
  execute(): void
  undo(): void
}

class TextEditor {
  private content = ''
  write(text: string): void { this.content += text }
  erase(len: number): void  { this.content = this.content.slice(0, -len) }
  getText(): string          { return this.content }
}

class WriteCommand implements Command {
  constructor(private editor: TextEditor, private text: string) {}
  execute(): void { this.editor.write(this.text)        }
  undo(): void    { this.editor.erase(this.text.length) }
}

// History stack enables undo/redo
class CommandHistory {
  private history: Command[] = []

  execute(cmd: Command): void {
    cmd.execute()
    this.history.push(cmd)
  }

  undo(): void {
    this.history.pop()?.undo()
  }
}

const editor  = new TextEditor()
const history = new CommandHistory()

history.execute(new WriteCommand(editor, 'Hello'))
history.execute(new WriteCommand(editor, ' World'))
console.log(editor.getText()) // 'Hello World'
history.undo()
console.log(editor.getText()) // 'Hello'`
