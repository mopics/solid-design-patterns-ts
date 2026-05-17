export const chainOfResponsibility = `abstract class Handler {
  private next: Handler | null = null

  setNext(handler: Handler): Handler {
    this.next = handler
    return handler
  }

  handle(request: number): string {
    if (this.next) return this.next.handle(request)
    return \`No handler for \${request}\`
  }
}

class LowHandler extends Handler {
  handle(request: number): string {
    if (request < 10) return \`LowHandler handled \${request}\`
    return super.handle(request)
  }
}

class MidHandler extends Handler {
  handle(request: number): string {
    if (request < 100) return \`MidHandler handled \${request}\`
    return super.handle(request)
  }
}

class HighHandler extends Handler {
  handle(request: number): string {
    return \`HighHandler handled \${request}\`
  }
}

const low = new LowHandler()
low.setNext(new MidHandler()).setNext(new HighHandler())

console.log(low.handle(5))   // LowHandler handled 5
console.log(low.handle(50))  // MidHandler handled 50
console.log(low.handle(500)) // HighHandler handled 500`
