export const builder = `class QueryBuilder {
  private table = ''
  private conditions: string[] = []
  private limitValue?: number

  from(table: string): this {
    this.table = table
    return this
  }

  where(condition: string): this {
    this.conditions.push(condition)
    return this
  }

  limit(n: number): this {
    this.limitValue = n
    return this
  }

  build(): string {
    let query = \`SELECT * FROM \${this.table}\`
    if (this.conditions.length) query += \` WHERE \${this.conditions.join(' AND ')}\`
    if (this.limitValue !== undefined) query += \` LIMIT \${this.limitValue}\`
    return query
  }
}

const query = new QueryBuilder()
  .from('users')
  .where('age > 18')
  .where('active = true')
  .limit(10)
  .build()
// SELECT * FROM users WHERE age > 18 AND active = true LIMIT 10`
