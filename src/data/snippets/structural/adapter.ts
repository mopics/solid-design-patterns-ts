export const adapter = `// Existing interface our code expects
interface Logger {
  log(message: string): void
}

// Third-party library with an incompatible interface
class ThirdPartyLogger {
  writeEntry(level: string, msg: string): void {
    console.log(\`[\${level}] \${msg}\`)
  }
}

// Adapter wraps the incompatible class to satisfy our interface
class LoggerAdapter implements Logger {
  constructor(private legacy: ThirdPartyLogger) {}

  log(message: string): void {
    this.legacy.writeEntry('INFO', message)
  }
}

function process(logger: Logger): void {
  logger.log('Processing started')
}

const adapter = new LoggerAdapter(new ThirdPartyLogger())
process(adapter) // works without changing ThirdPartyLogger`
