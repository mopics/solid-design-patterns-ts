export const isp = `// ❌ Fat interface forces implementors to stub methods they don't need
interface Worker {
  work(): void
  eat(): void
  sleep(): void
}

class Robot implements Worker {
  work(): void  { console.log('working') }
  eat(): void   { throw new Error('Robots do not eat') }
  sleep(): void { throw new Error('Robots do not sleep') }
}

// ✅ Segregated — implement only what applies
interface Workable  { work(): void  }
interface Eatable   { eat(): void   }
interface Sleepable { sleep(): void }

class HumanWorker implements Workable, Eatable, Sleepable {
  work(): void  { console.log('working')  }
  eat(): void   { console.log('eating')   }
  sleep(): void { console.log('sleeping') }
}

class RobotWorker implements Workable {
  work(): void { console.log('working') }
}`
