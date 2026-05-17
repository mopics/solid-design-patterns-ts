export const templateMethod = `abstract class DataParser {
  // Template method — defines the skeleton
  parse(rawData: string): void {
    const data = this.readData(rawData)
    const parsed = this.parseData(data)
    this.analyzeData(parsed)
    this.sendReport(parsed)
  }

  protected abstract parseData(data: string): Record<string, unknown>[]

  private readData(raw: string): string {
    console.log('Reading data...')
    return raw
  }

  private analyzeData(data: Record<string, unknown>[]): void {
    console.log(\`Analyzing \${data.length} records...\`)
  }

  protected sendReport(data: Record<string, unknown>[]): void {
    console.log(\`Sending report with \${data.length} records\`)
  }
}

class CSVParser extends DataParser {
  protected parseData(data: string): Record<string, unknown>[] {
    return data.split('\\n').map(row => ({ row }))
  }
}

class JSONParser extends DataParser {
  protected parseData(data: string): Record<string, unknown>[] {
    return JSON.parse(data)
  }
}

new CSVParser().parse('a,b\\nc,d')`
