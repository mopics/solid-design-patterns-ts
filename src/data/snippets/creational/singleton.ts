export const singleton = `class Database {
  private static instance: Database | null = null
  private constructor(private url: string) {}

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database('postgres://localhost/mydb')
    }
    return Database.instance
  }

  query(sql: string): string {
    return \`[\${this.url}] \${sql}\`
  }
}

const db1 = Database.getInstance()
const db2 = Database.getInstance()
console.log(db1 === db2) // true — same instance`
