export const abstractFactory = `interface Button    { render(): string }
interface Checkbox  { check(): string  }

// Abstract factory — declares the family
interface UIFactory {
  createButton(): Button
  createCheckbox(): Checkbox
}

// Concrete family: Light theme
class LightButton   implements Button   { render() { return '[ Light Button ]'   } }
class LightCheckbox implements Checkbox { check()  { return '[ Light Checkbox ]' } }

class LightThemeFactory implements UIFactory {
  createButton():   Button   { return new LightButton()   }
  createCheckbox(): Checkbox { return new LightCheckbox() }
}

// Concrete family: Dark theme
class DarkButton   implements Button   { render() { return '[ Dark Button ]'   } }
class DarkCheckbox implements Checkbox { check()  { return '[ Dark Checkbox ]' } }

class DarkThemeFactory implements UIFactory {
  createButton():   Button   { return new DarkButton()   }
  createCheckbox(): Checkbox { return new DarkCheckbox() }
}

function renderUI(factory: UIFactory): void {
  console.log(factory.createButton().render())
  console.log(factory.createCheckbox().check())
}`
