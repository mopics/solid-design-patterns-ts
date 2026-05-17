export const mediator = `interface ChatMediator {
  send(message: string, sender: User): void
}

class User {
  constructor(
    readonly name: string,
    private mediator: ChatMediator,
  ) {}

  send(message: string): void {
    console.log(\`\${this.name} sends: "\${message}"\`)
    this.mediator.send(message, this)
  }

  receive(message: string, from: User): void {
    console.log(\`\${this.name} receives from \${from.name}: "\${message}"\`)
  }
}

class ChatRoom implements ChatMediator {
  private users: User[] = []

  register(user: User): void { this.users.push(user) }

  send(message: string, sender: User): void {
    this.users
      .filter(u => u !== sender)
      .forEach(u => u.receive(message, sender))
  }
}

const room  = new ChatRoom()
const alice = new User('Alice', room)
const bob   = new User('Bob',   room)
room.register(alice)
room.register(bob)
alice.send('Hey Bob!')  // Bob receives it, Alice does not`
