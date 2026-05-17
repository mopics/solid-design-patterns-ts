
export const builder = `// if the steps are always the same, we can use a fluent interface to chain the method calls and make it more readable
interface IBuilder {
  buildFirtsStage(): this
  buildSecondStage(): this
  buildFinalStage(): this
  getResult(): Town
}

// The Concrete Builder class implements the Builder interface and provides specific implementations for the construction steps. It maintains an instance of the product being built and provides a method to retrieve the final product.
class TownBuilder implements IBuilder {
  private town: Town = new Town()

  buildFirtsStage(): this {
    this.town.addHouse()
    return this
  }

  buildSecondStage(): this {
    this.town.addPark()
    return this
  }

  buildFinalStage(): this {
    this.town.addSchool()
    return this
  }

  getResult(): Town {
    return this.town
  }
}

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

// The Director class is responsible for managing the construction process. It uses a Builder object to construct the product by calling the appropriate construction steps in a specific order. The Director can be configured with different Builders to create different representations of the product.
class Director {
  private builder!: IBuilder

  public setBuilder(builder: IBuilder): void {
    this.builder = builder
  }

  public buildFirstStage(): void {
    this.builder.buildFirtsStage()
  }

  public buildAllStages(): void {
    this.builder.buildFirtsStage()
    this.builder.buildSecondStage()
    this.builder.buildFinalStage()
  }
}

const builder = new TownBuilder();
const director = new Director();
director.setBuilder(builder);
director.buildAllStages();
const town = builder.getResult();

`
