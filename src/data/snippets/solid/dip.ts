export const dip = `// ❌ High-level module depends on a concrete low-level class
class MySQLDatabase {
  save(data: string): void { console.log('saving to MySQL:', data) }
}

class UserServiceBad {
  private db = new MySQLDatabase() // tightly coupled
  saveUser(name: string): void { this.db.save(name) }
}

// ✅ Both depend on the abstraction
interface Database {
  save(data: string): void
}

class PostgresDatabase implements Database {
  save(data: string): void { console.log('saving to Postgres:', data) }
}

class UserService {
  constructor(private db: Database) {} // injected, not instantiated

  saveUser(name: string): void { this.db.save(name) }
}

const service = new UserService(new PostgresDatabase())`
