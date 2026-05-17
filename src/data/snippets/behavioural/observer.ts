export const observer = `interface Observer<T> {
  update(data: T): void
}

class EventEmitter<T> {
  private observers = new Set<Observer<T>>()

  subscribe(observer: Observer<T>): void   { this.observers.add(observer)    }
  unsubscribe(observer: Observer<T>): void { this.observers.delete(observer) }

  emit(data: T): void {
    this.observers.forEach(o => o.update(data))
  }
}

// Concrete observers
class Logger implements Observer<string> {
  update(data: string): void { console.log(\`[LOG] \${data}\`) }
}

class Analytics implements Observer<string> {
  update(data: string): void { console.log(\`[ANALYTICS] tracking: \${data}\`) }
}

const emitter   = new EventEmitter<string>()
const logger    = new Logger()
const analytics = new Analytics()

emitter.subscribe(logger)
emitter.subscribe(analytics)
emitter.emit('user_signup')   // both notified

emitter.unsubscribe(analytics)
emitter.emit('user_login')    // only logger notified`
